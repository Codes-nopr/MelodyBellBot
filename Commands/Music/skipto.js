const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'skipto',
	aliases: ['skto'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		let jumpNum = args[0];
		if (!jumpNum) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Please provide song number to skip.`).setTimestamp());
		if (isNaN(jumpNum)) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Provided song number isn't a integer.`).setTimestamp());
		try { await client.distube.jump(message, parseInt(jumpNum) - 1); return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Track skipped to **${jumpNum}**th number track.`).setTimestamp()); } catch { return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`An error occurred while processing the command.`)); };
	}
}