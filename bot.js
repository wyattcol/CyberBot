/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDI1MDI0MDQ3NTA4NzUwMzM2.DZBaWw.JmqqYKXuA63UhdFiXyTbNWR1g24';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':buy') {
		var number1 = words[1]
		console.log(message.author.id)
		console.log(message.author.username)
		username = message.author.username
		id = message.author.id
		tag = message.author.tag
		var number2 = words[2]
		console.log('your number is', number1)
		   //client.sendMessage('you ran the :purchase command')
		message.guild.channels.find("name", "purchaserequests").send("DiscordId: "+ id + "     " + "Username: " + tag + " " + number1);
		//message.author.sendMessage("Thank you for sending a purchase request for Cyber\nYou will be messaged shortly by an owner to do the transaction.")


	}
});

client.on('message', message => {
	if (message.content === ':help')
	{
		message.channel.send('To purchase Cyber, all you have to do is run a command! Type :buy [Amazon/Steam Code]. Then, your name will be added to a purchase list. The owner of Cyber will then confirm your request and add you for the exploit.');
	}
});

client.on('message', message => {
	if (message.content === ':test')
	{
		message.channel.send('Tested');
	}
});

// Log our bot in
client.login(token);
