const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'join',
	aliases: ['connect'],

	async execute(client, message) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		
		let vc = await message.member.voice.channel;
		await vc.join(() => {
			return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Joined ${vc} voice channel.`).setTimestamp());
		}).catch(e => {
			return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred while joining the voice channel.\`\`\`${e}\`\`\``));
		})
	}
}