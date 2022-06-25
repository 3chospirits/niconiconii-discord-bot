import Command from "../classes/Command.js"

class Ping extends Command {
	aliases = ["pong"]
	cooldown = 5 * 1000

	async run(message) {
		message.reply("pong!")
	}
}

export default Ping
