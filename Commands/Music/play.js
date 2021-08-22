const { MessageEmbed } = require('discord.js');
const getAttachmentURL = (msg) => (msg.attachments.first() || {}).url;

module.exports = {
	name: 'play',
	aliases: ['p'],

	async execute (client, message, args) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		let query = args.join(' ') || getAttachmentURL(message);
		if (!query) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`Please specify a song query to play.`).setTimestamp())
		try { await client.distube.play(message, query); } catch (e) { return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred while processing the command.`).setTimestamp()) };
	}
}
