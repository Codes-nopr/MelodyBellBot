const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`There are no music found about this query...`)
	await message.channel.send(embed);
}

