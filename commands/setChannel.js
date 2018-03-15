const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You require a role with the permsissions \`Administrator\`').then(() => {
        message.react(`⛔`);
    });
    if(!message.mentions.channels.first() && args.join(` `).toLowerCase() !== `none`) return message.channel.send(`Please supply a channel\n > **.setChannel #channel**`);

    let newChannel;
    if(args.join(` `).toLowerCase() === `none`) newChannel = ``;
    else newChannel = message.mentions.channels.first().id

    db.updateText(`messageChannel_${message.guild.id}`, newChannel).then(i => {
        let embed = new Discord.RichEmbed()
        .setDescription(`Succesfully changed logging channel to \n> **${message.mentions.channels.first()}**`)
        .setColor(`#ff0000`);

        message.channel.send(embed);
    })
}

exports.help = {
    name:`setChannel`
}