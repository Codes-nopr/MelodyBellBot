const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'uptime',
	aliases: ['about', 'info'],

	async execute(client, message) {
		
		let milliseconds = parseInt((client.uptime % 1000) / 100),
            seconds = parseInt((client.uptime / 1000) % 60),
            minutes = parseInt((client.uptime / (1000 * 60)) % 60),
            hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24),
            days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60)

            days = (days < 10) ? "0" + days : days;
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;


		let embed = new MessageEmbed()
		.setColor(client.color.color)
		.setDescription(`Source Code: [Link!](https://github.com/MathInDOS/MelodyBellBot)`)
		.addField(`Servers`, client.guilds.cache.size, true)
		.addField(`Members`, client.users.cache.size, true)
		.addField(`Channels`, client.channels.cache.size, true)
		.addField(`Home`, `[Invite!](https://discord.gg/Zpt4sV99Bp)`, true)
		.addField(`Uptime`, `${days}:${hours}:${minutes}:${seconds}`, true)
		.addField(`Memory Usage`, `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`, true)
		.addField(`Version`, `v1.20 (Development)`, true)
		.addField(`Node.js`, process.version, true)
		.addField(`Discord.js`, `12.5.3`, true)
		.addField(`Dependencies`, `@discordjs/opus, discord.js, distube, dotenv, ffmpeg-static, miniget, tweetnacl, ytdl-core`, true)
		.setFooter(`Simple music bot created by dacydylyay#1913`)
		.setTimestamp()

		return message.channel.send(embed);
	}
}