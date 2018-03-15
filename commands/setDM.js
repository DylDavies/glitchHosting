const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You require a role with the permsissions \`Administrator\`').then(() => {
        message.react(`⛔`);
    });
    if(!args.join(` `) && args.join(` `).toLowerCase() !== `none`) return message.channel.send(`Please supply a message\n > **.setDM message**`);

    let newMessage;
    if(args.join(` `).toLowerCase() === `none`) newMessage = ``;
    else newMessage = args.join(` `).trim();

    db.updateText(`joinMessageDM_${message.guild.id}`, newMessage).then(i => {
        let embed = new Discord.RichEmbed()
        .setDescription(`Succesfully changed welcome DM message to \n> ${args.join(` `).trim()}`)
        .setColor(`#ff0000`);

        message.channel.send(embed);
    })
}

exports.help = {
    name:`setDM`
}