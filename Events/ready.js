module.exports = async (client) => {
	console.log(`Logged in ${client.user.username}. On ${client.guilds.cache.size} guilds with ${client.users.cache.size} members.`);
	let prefix = process.env.Prefix || 'm;';
	await client.user.setActivity(`${prefix}help`);
	await client.user.setStatus('online');
}
