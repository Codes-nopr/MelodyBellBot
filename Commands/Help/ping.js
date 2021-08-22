const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	aliases: ['pong'],

	async execute(client, message) {
		return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.pong} Pong! Gateway: **${Date.now() - message.createdTimestamp}ms** Websocket: **${Math.round(client.ws.ping)}ms**`))
	}
}