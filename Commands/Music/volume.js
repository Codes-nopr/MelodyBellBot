const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'volume',
	aliases: ['vol'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		if (!client.distube.isPlaying(message)) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`There are no music currently playing.`).setTimestamp())
		let volume = args[0];
		if (!volume) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Please set a new volume level.`).setTimestamp());
		if (isNaN(volume)) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Provided volume isn't a integer.`).setTimestamp());
		try { await client.distube.setVolume(message, parseInt(volume)); return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Volume changed to **${volume}**%.`)); } catch { return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`An error occurred while processing the command.`)); };
	}
}