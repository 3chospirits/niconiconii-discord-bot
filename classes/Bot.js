import { Client, Collection } from "discord.js"
import path from "path"
import { fileURLToPath } from "url"
import fs from "fs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function getFiles(directory) {
	return fs.readdirSync(directory).filter((file) => file.endsWith(".js"))
}

class Bot extends Client {
	constructor(args) {
		super(args)

		this.prefix = args.prefix
		this.commands = new Collection()
		this.events = new Collection()
	}

	async start(token) {
		await super.login(token)
	}

	loadEvents() {
		getFiles(`${(this, __dirname)}/../events/`).forEach(async (eventFileName) => {
			const eventName = eventFileName.split(".js")[0]
			const Event = (await import(`${(this, __dirname)}/../events/${eventFileName}`)).default
			const event = new Event(this, eventName)
			event.startListener()
			this.events.set(eventName, event)
		})
	}

	loadCommands() {
		getFiles(`${(this, __dirname)}/../commands/`).forEach(async (commandFileName) => {
			const commandName = commandFileName.split(".js")[0]
			const Command = (await import(`${(this, __dirname)}/../commands/${commandFileName}`)).default
			const command = new Command(this, commandName)
			this.commands.set(commandName, command)
		})
	}

	getCommand(commandName) {
		return this.commands.get(commandName)
	}
}

export default Bot
