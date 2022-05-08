import { Intents } from "discord.js"
import dotenv from "dotenv"
import Bot from "./classes/Bot.js"

dotenv.config()

const TOKEN = process.env.TOKEN

const client = new Bot({
	intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
	prefix: ".",
})

client.loadEvents()
client.loadCommands()

client.start(TOKEN)
