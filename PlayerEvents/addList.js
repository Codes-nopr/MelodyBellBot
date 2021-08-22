const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message, queue, playlist) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`Queued [${playlist.name}](${playlist.url}) [${playlist.user}]`)
	await message.channel.send(embed)
}
