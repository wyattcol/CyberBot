const Discord = require('discord.js');
const superagent = require("superagent");
const Client = new Discord.Client();
const OwnerID = "244873391717220352";

const prefix = ":"



Client.on("ready", () => {
	console.log("BOT ONLINE");
	Client.user.setPresence({ game: { name: `SynexMC.net`, type: 0} });
});

// welcome message

Client.on("guildCreate", guild => {
	console.log("Some one added the Bot to the server created by Orangedude4221)
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);

	if (command === "announce") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription("@everyone " + "Important Announcement: " + args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField(":help", "Will give the current command list")
		.addField(":announce [Text] will allow the owner to create announcements")
		message.channel.send({embed})
	}

});

Client.login("NDI1MDI0MDQ3NTA4NzUwMzM2.DZBaWw.JmqqYKXuA63UhdFiXyTbNWR1g24");
