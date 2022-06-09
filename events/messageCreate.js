import Event from "../classes/Event.js"

class MessageCreate extends Event {
	async run(message) {
		if (!message.content.startsWith(this.client.prefix)) return

		let command = this.client.getCommand(message.content.replace(this.client.prefix, ""))
		
		if (command) command.run(message)
	}
}

export default MessageCreate
