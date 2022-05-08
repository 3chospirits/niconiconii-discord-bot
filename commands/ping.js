import Command from "../classes/Command.js"

class Ping extends Command {
	async run(message) {
		message.reply("pong!")
	}
}

export default Ping
