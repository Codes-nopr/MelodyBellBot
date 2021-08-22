const { MessageEmbed } = require('discord.js'); 

module.exports = async (client, message, error) => {
	let embed = new MessageEmbed()
	.setColor(client.color.color)
	.setDescription(`An error occurred while playing the track.\`\`\`${error}\`\`\``)
	.setTimestamp()
	await message.channel.send(embed)
}
