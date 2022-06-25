import Event from "../classes/Event.js"

class MessageCreate extends Event {
	async run(message) {
		if (!message.content.startsWith(this.client.prefix)) return

		let command = this.client.getCommand(message.content.replace(this.client.prefix, ""))
		if (!command) return

		if (command.cooldown){
			let cooldownUntil = this.client.cooldowns.get(`${command.name}-${message.author.id}`)
			if (cooldownUntil && cooldownUntil > Date.now())
				return message.reply(`Command is still on cooldown for ${Math.ceil((cooldownUntil - Date.now())/1000)} more seconds`)

			this.client.cooldowns.set(`${command.name}-${message.author.id}`, new Date().valueOf() + command.cooldown)
		}

		await command.run(message)
		
	}
}

export default MessageCreate
