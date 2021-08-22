const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'echo',
	aliases: [],

	async execute(client, message) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		if (!client.distube.isPlaying(message)) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Currently no music is playing.`).setTimestamp()) 
		try { await client.distube.setFilter(message, 'echo'); return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`**Echo** filter applying to the music.`).setTimestamp()); } catch (e) { return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred while processing the command.`).setTimestamp()) };
	}
}