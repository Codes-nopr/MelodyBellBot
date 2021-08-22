const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	aliases: ['where'],

	async execute(client, message, args) {
		let embed = new MessageEmbed()
		.setColor(client.color.color)
		.setTitle(`${client.emotes.help} Command List`)
		.addField(`${client.emotes.notes} Music`, '`autoplay`, `join`, `leave`, `loop`, `lyrics`, `pause`, `play`, `playskip`, `queue`, `skip`, `skipto`, `stop`, `volume`')
		.addField(`${client.emotes.filter} Filters`, '`3d`, `bassboost`, `earwax`, `echo`, `flanger`, `gate`, `haas`, `karaoke`, `mcompand`, `nightcore`, `phaser`, `reverse`, `surround`, `tremolo`, `vaporwave`')
		.addField(`${client.emotes.radio} Radio`, '`radio`')
		.addField(`${client.emotes.together} Together`, '`betrayal`, `chess`, `fishing`, `poker`, `youtube`, `zombsroyale`')
		.addField(`${client.emotes.info} Info`, '`help`, `uptime`')
		.setTimestamp()
		return message.channel.send(embed)
	}
}