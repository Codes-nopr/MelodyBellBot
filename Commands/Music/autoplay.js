const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'autoplay',
	aliases: ['24', '24/7'],

	async execute(client, message, args) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		let mode = await client.distube.toggleAutoplay(message);
		return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Autoplay has been ${mode ? 'On' : 'Off'}.`));
	}
}