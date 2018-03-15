const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setImage(message.author.avatarURL)
    .addField("Full username", `${message.author.tag}`)
    .addField("Created on", `${message.author.createdAt} ${message.author.createdTimestamp}`)
    .addField("Discord ID", `${message.author.id}`, true)
    .addField("Profile Picture", "/////////////////////////////////////////")
    .setTimestamp()
    .setFooter('© Brawlympics', 'http://wiki.brawlhalla.com/images/thumb/f/ff/NewGnashClassicColors.png/200px-NewGnashClassicColors.png%27')
      return message.channel.send(botembed);
}

module.exports.help = {
    name: 'userinfo'
}