const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let text = message.content.slice(1).trim().split(/ +/g);
    let string = text.slice(1).join(` `);
    console.log(`STRING === ${string}\nARGS === ${args.join(" ")}`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You require a role with the permsissions \`Administrator\`').then(() => {
        message.react(`⛔`);
    });if(!args.join(" ")) return message.channel.send(`Please enter a prefix!\n.changePrefix <prefix>`);

    db.updateText(`guildPrefix_${message.guild.id}`, args.join().trim()).then(i => {
        message.channel.send(`Prefix Changed to: ` + i.text);
    });
}

exports.help = {
    name:`setPrefix`
}