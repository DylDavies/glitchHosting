const Discord = require("discord.js")

module.exports.run = async (bot, message, args ) => {
    let text = message.content.slice(1).trim().split(/ +/g);
    let string = text.slice(1).join(` `);

    if(string === ``) return message.channel.send(`Please suggest something or stop wasting your time... :anger: EXAMPLE USAGE: **.suggest my suggestion here**`);
    
    let suggests = bot.channels.get(`420278128666214410`);

    let embed = new Discord.RichEmbed()
    .setTitle(`Suggestion`)
    .addField(`By`, `${message.author.tag} with the ID of ${message.author.id}`)
    .setImage(`${message.author.displayAvatarURL}`)
    .addField(`Suggestion`, `"${string}"`)
    .setTimestamp()
    .setFooter(`Message Author's DP`)

    suggests.send(embed);
    message.channel.send('Thank you for the support! If we are going to use it we **might** credit you')
}

module.exports.help = {
    name: `suggest`
}