const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`Playing end...no more songs in queue.`)
	await message.channel.send(embed)
}
