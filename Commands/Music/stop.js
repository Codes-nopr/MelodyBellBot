const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'stop',
	aliases: ['die'],

	async execute(client, message) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		if (!client.distube.isPlaying(message)) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Currently no music is playing to stop.`));
		try { await client.distube.stop(message); return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Music has been stopped.`).setTimestamp()) } catch (e) { return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred while processing the command.`).setTimestamp()) };
	}
}
