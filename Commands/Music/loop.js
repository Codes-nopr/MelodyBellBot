const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'loop',
	aliases: [],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		if (!client.distube.isPlaying(message)) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Currently no music is playing to loop.`));
		try { 
			if (parseInt(args[0]) === 0) {
				await client.distube.setRepeatMode(message, 0); 
				return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Loop mode has been **disabled**.`))
			}
			if (parseInt(args[0]) === 1) {
				await client.distube.setRepeatMode(message, 1);
				return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Loop mode has been **enabled**.`))	
			}
		} catch {
			return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred while processing the command.`));
		}
	}
}
