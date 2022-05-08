import Event from "../classes/Event.js"

class MessageCreate extends Event {
	async run(message) {
		if (!message.content.startsWith(this.client.prefix)) return
		let args = message.content.split(/ +/g)
		let command = this.client.getCommand(args[0].replace(this.client.prefix, ""))
		if (command) command.run(message)
	}
}

export default MessageCreate
