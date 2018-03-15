const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args, tools) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You require a role with the permsissions \`Administrator\`').then(() => {
        message.react(`⛔`);
    });
    if(!args.join(` `) && args.join(` `).toLowerCase() !== `none`) return message.channel.send(`Please supply a rolename\n > **.setAutoRole <rolename>**`);


    db.updateText(`autoRole_${message.guild.id}`, args.join(` `).trim()).then(i => {
        tools.embed(message.channel , `AutoRole updated to\n> ${i.text}`);
    })
}

exports.help = {
    name:`setAutoRole`
}