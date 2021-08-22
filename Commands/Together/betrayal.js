const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'betrayal',
    aliases: [],
    
    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You must be a voice channel before using this command.`).setTimestamp());
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(new MessageEmbed().setColor('RED').setDescription(`You are not in same voice channel.`).setTimestamp());

        try {
            await fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                method: 'POST',
                body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: '773336526917861400',
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                'Authorization': `Bot ${client.token}`,
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .then(invite => {
                if (invite.error || !invite.code) return message.channel.send(new MessageEmbed().setColor(cliebt.color.shine).setDescription(`An error occurred while granting invite.`).setTimestamp());
                if(invite.code === 50013 || invite.code === '50013') return message.channel.send(new MessageEmbed().setColor(client.color.shine).setDescription(`I have lack of permissions to generate invite code.`).setTimestamp());
                return message.channel.send(`${client.emotes.thumbsup} Join Betrayal Together!\nhttps://discord.com/invite/${invite.code}`);
            })
        } catch (e) {
            message.channel.send(new MessageEmbed().setColor('RED').setDescription(`An error occurred while processing the command.\n\`\`\`${e}\`\`\``).setTimestamp());
        }
    }
}
