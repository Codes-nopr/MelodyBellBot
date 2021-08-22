const { Client, Collection } = require('discord.js');
const Distube = require('distube');
const fs = require('fs');
require('dotenv').config();
const client = new Client({ intents: 32767 });

client.distube = new Distube(client, {
	searchSongs: true,
	emitNewSongOnly: true,
	leaveOnEmpty: false,
	leaveOnFinish: false,
	leaveOnStop: true,
});
client.commands = new Collection();
client.config = require('./Config/config');
client.emotes = client.config.emojis;
client.color = client.config.color;

// .env config

const token = process.env.Token || new Error(`No token found.`);
if (!process.env.ownerID) throw new Error(`No owner id found.`);

fs.readdirSync(`./Commands`).forEach(dirs => {
	const commands = fs.readdirSync(`./Commands/${dirs}`).filter(files => files.endsWith(`.js`));

	for (const file of commands) {
		const command = require(`./Commands/${dirs}/${file}`);
		console.log(`Loading Command ${file}`);
		client.commands.set(command.name, command);
	};
});

const events = fs.readdirSync(`./Events`).filter(file => file.endsWith(`.js`));

for (const file of events) {
	console.log(`Loading Event ${file}`);
	const event = require(`./Events/${file}`);
	client.on(file.split('.')[0], event.bind(null, client));
};


const player = fs.readdirSync(`./PlayerEvents`).filter(file => file.endsWith(`.js`));

for (const file of player) {
	console.log(`Loading distube-event: ${file}`);
	const event = require(`./PlayerEvents/${file}`);
	client.distube.on(file.split('.')[0], event.bind(null, client));
};

process.on('unhandledRejection', async (err, p) => {
	console.warn(`Promise rejection: ${p}`);
	console.warn(`Fault: ${err}`);
});

process.on('uncaughtException', async (err, p) => {
	console.warn(`Promise rejection: ${p}`);
	console.warn(`Fault: ${err}`);
});

client.login(token);
