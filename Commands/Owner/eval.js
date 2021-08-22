const { MessageEmbed } = require('discord.js');
const { ownerID } = process.env;

module.exports = {
    name: 'eval',
    aliases: ['code'],

    async execute(client, message, args) {
        if (message.author.id !== ownerID) return;

        let content = message.content.split(' ').slice(1).join(' ');
        let result = new Promise((resolve, reject) => resolve(eval(content)));

        return result.then(output => {
            if (typeof output !== 'string') {
                output = require('util').inspect(output, { depth: 0 });
            }
        }).catch(e => {
            return message.channel.send(new MessageEmbed().setDescription(`\`\`\`js\n${e.toString()}\`\`\``));
        })
    }
}