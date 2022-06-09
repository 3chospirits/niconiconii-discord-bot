import { Intents } from "discord.js"
import "dotenv/config"
import Bot from "./classes/Bot.js"

const client = new Bot({
	intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS],
	prefix: ".",
})

client.loadEvents()
client.loadCommands()

client.start(process.env.TOKEN)
