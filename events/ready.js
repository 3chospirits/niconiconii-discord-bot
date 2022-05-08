import Event from "../classes/Event.js";

class Ready extends Event {
    async run(){
        console.log(`Logged in as ${this.client.user.tag}!`)
    }
}

export default Ready