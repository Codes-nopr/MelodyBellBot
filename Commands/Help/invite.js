module.exports = {
    name: 'invite',
    aliases: [],
    
    async execute(client, message, args) {
        return message.channel.send(`Invite me to your server!\n\nhttps://discord.com/api/oauth2/authorize?client_id=877436488344805426&permissions=36703232&scope=bot`);
    }
}
