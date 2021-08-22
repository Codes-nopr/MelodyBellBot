const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pause',
	aliases: ['wait'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`There are no songs in the queue.`).setTimestamp())
		if (client.distube.isPaused(message)) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Current track is already paused.`))
		try { await client.distube.pause(message); return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Current track has been paused.`)); } catch (e) { return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred while processing the command.\`\`\`${e}\`\`\``)); };
	}
}
