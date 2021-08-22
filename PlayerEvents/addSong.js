const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message, queue, song) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`Queued [${song.name}](${song.url}) [${song.user}]`)
	await message.channel.send(embed);
}
