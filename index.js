import Discord, { Intents } from "discord.js"
import dotenv from "dotenv"

dotenv.config()

const TOKEN = process.env.TOKEN

const client = new Discord.Client({
	intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
})

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (message) => {
	if (message.content === "hello") 
        message.reply("Hello World!")
})

client.login(TOKEN)
