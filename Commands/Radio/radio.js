const { MessageEmbed } = require('discord.js'); 

module.exports = {
	name: 'radio',
	aliases: [],

	async execute(client, message) {
		if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());
		
		let i = 1;
		let embed = new MessageEmbed()
		.setColor(client.color.color)
		.setDescription(`**Pick up a radio station which you want to play (You've 20 seconds, to cancel type cancel)**`)
		.addField(`${client.emotes.radio} Standard Radio`, `**${i}:** Standard-Radio\n**${i + 1}:** Base-Radio\n**${i + 2}:** Chill-Radio\n**${i + 3}:** Dance-Radio\n**${i + 4}:** Deutsch-Rap-Radio\n**${i + 5}:**  Greatest-hits-Radio\n**${i + 6}:** Hip-hop-Radio\n**${i + 7}:** Hip-hop-Radio\n**${i + 8}:** Party-Radio\n**${i + 9}:** US-Rap-Radio\n**${i + 10}:** X-Mas-Radio`, true)
		.addField(`${client.emotes.british} British Radio`, `**${i + 11}:** Greatest-hits-Radio\n**${i + 12}:** Absolut-Radio\n**${i + 13}:** Absolut-70s-Radio\n**${i + 14}:** Absolut-80s-Radio\n**${i + 15}:** Absolut-90s-Radio\n**${i + 16}:** Absolut-2000s-Radio\n**${i + 17}:** Absolut-Classic-Rock`, true)
		.addField(`${client.emotes.australia} Australia Radio`, `**${i + 18}:** Absolut-Classic-Rock\n**${i + 19}:** Top-Radio `, true)
		.addField(`${client.emotes.austria} Austria Radio`, `**${i + 20}:** 88.6-Radio\n**${i + 21}:** Kronehit-Radio`, true)
		.addField(`${client.emotes.france} France Radio`, `**${i + 22}:** NRJ-Radio\n**${i + 23}:** Radio-France-Radio`, true)
		.addField(`${client.emotes.italy} Italy Radio`, `**${i + 24}:** Rai-Radio\n**${i + 25}:** Veronica-Radio`, true)
		.addField(`${client.emotes.estonia} Estonia`, `**${i + 26}:** ERR-Radio\n**${i + 27}:** Tallin-Radio`, true)
		.addField(`${client.emotes.spain} Spain Radio`, `**${i + 28}:** Color-Music-Radio\n**${i + 29}:** Helax-93.7-Radio`, true)
		.addField(`${client.emotes.czech} Czech Radio`, `**${i + 30}:** Český-rozhlas-Radio\n**${i + 31}:** Spin Radio`, true)
		.addField(`${client.emotes.netherlands} Netherlands Radio`, `**${i + 32}:** BB-Radio\n**${i + 33}:** 538-Radio`, true)
		.setTimestamp()
		message.channel.send(embed)	

		let filter = m => m.author.id === message.author.id;
		message.channel.awaitMessages(filter, {
			max: 1,
			time: 20000,
			errors: ['time']
		}).then(async message => {
			message = message.first();

			if (message.content === 'cancel' || message.content === 'quit') return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Selection has been cancelled by author.`));

			switch (message.content) {
				case '1':
					try {
						await Play(`http://ice.abradio.cz:8000/helax128.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '2':
					try {
						await Play(`https://baseradiode.stream.laut.fm/baseradiode`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '3':
					try {
						await Play(`https://streams.ilovemusic.de/iloveradio17.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '4':
					try {
						await Play(`https://streams.ilovemusic.de/iloveradio2.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '5':
					try {
						await Play(`https://streams.ilovemusic.de/iloveradio6.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '6':
					try {
						await Play(`https://streams.ilovemusic.de/iloveradio16.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '7':
					try {
						await Play(`https://streams.ilovemusic.de/iloveradio3.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '8':
					try {
						await Play(`https://streams.ilovemusic.de/iloveradio14.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '9':
					try {
						await Play(`https://streams.ilovemusic.de/iloveradio13.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '10':
					try {
						await Play(`https://streams.ilovemusic.de/iloveradio8.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '11':
					try {
						await Play(`https://stream-mz.planetradio.co.uk/net2national.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '12':
					try {
						await Play(`http://icy-e-bab-02-gos.sharp-stream.com/absoluteradio.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '13':
					try {
						await Play(`http://ais.absoluteradio.co.uk/absolute70s.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '14':
					try {
						await Play(`http://ais.absoluteradio.co.uk/absolute80s.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '15':
					try {
						await Play(`http://ais.absoluteradio.co.uk/absolute90s.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '16':
					try {
						await Play(`http://ais.absoluteradio.co.uk/absolute00s.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '17':
					try {
						await Play(`http://icy-e-bab-04-cr.sharp-stream.com/absoluteclassicrock.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '18':
					try {
						await Play(`http://loadbalancing.topradio.be/topradio.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '19':
					try {
						await Play(`http://radio886.fluidstream.eu/886_live.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '20':
					try {
						await Play(`http://onair.krone.at/kronehit.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '21':
					try {
						await Play(`http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '22':
					try {
						await Play(`http://direct.fipradio.fr/live/fip-midfi.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '23':
					try {
						await Play(`http://icestreaming.rai.it/1.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '24':
					try {
						await Play(`http://icestreaming.rai.it/2.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '25':
					try {
						await Play(`http://icecast.err.ee/vikerraadio.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '26':
					try {
						await Play(`http://icecast.err.ee/raadiotallinn.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '27':
					try {
						await Play(`http://icecast8.play.cz/color128.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '28':
					try {
						await Play(`http://ice.abradio.cz:8000/helax128.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '29':
					try {
						await Play(`http://icecast6.play.cz/cro2-128.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '30':
					try {
						await Play(`http://icecast4.play.cz/spin128.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '31':
					try {
						await Play(`http://icecast.omroep.nl/radio1-bb-mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '32':
					try {
						await Play(`http://21223.live.streamtheworld.com/RADIO538.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

				case '33':
					try {
						await Play(`http://streams2.radio90.pl:8000/radio90_128kbps_stereo.mp3`);
						return message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`${client.emotes.music} Started Playing in voice...`).setTimestamp());
					} catch (e) {
						return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred on radio search.\`\`\`${e}\`\`\``).setTimestamp());
					}
				break;

			}
		}).catch(() => { message.channel.send(new MessageEmbed().setColor(client.color.color).setDescription(`Selection has been auto cancelled during timeout.`))});

		async function Play(url) {
			if (!url) throw new Error(`Radio station URL missing.`);
			if (typeof url === 'object') throw new TypeError(`Radio URL contain some unknown data, check the URL again.`);

			let voiceChannel = await message.member.voice.channel;
			await voiceChannel.join()
			.then(async connection => {
				let dispatcher = await connection.play(url);
				dispatcher
				.on('error', async () => { })
				.on('end', async () => { });
			}).catch(e => console.warn(e));
		}
	}
}
