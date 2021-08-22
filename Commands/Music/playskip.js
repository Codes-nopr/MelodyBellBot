const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'playskip',
	aliases: ['skipplay'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`There are no songs in the queue.`).setTimestamp())
		let newMusic = args.join(' ');
		if (!newMusic) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Please query a new song.`).setTimestamp())
		try { await client.distube.playSkip(message, newMusic); return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Current music has been skipped and start playing next one.`).setTimestamp()); } catch { return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred while processing the command.`)); }
	}
}