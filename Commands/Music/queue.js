const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'queue',
	aliases: ['list'],

	async execute(client, message) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		let queue = await client.distube.getQueue(message);
		if (!queue) return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`There are no songs in the queue.`).setTimestamp())
		let embed = new MessageEmbed()
		.setColor(client.color.color)
		.setDescription(`Current queue:\n${queue.songs.map((song, id) => `**${id + 1}**. ${song.name} | \`${song.formattedDuration}\``).slice(0, 10).join('\n')}`)
		.setTimestamp()
		return message.channel.send(embed);
	}
}
