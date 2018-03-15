const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args, tools) => {
    if(!message.mentions.members.first()) return message.channel.send(`**Please Specify a user**\n > .reviews @user`);

    let mentioned = message.mentions.members.first()

    db.fetchObject(`userReviews_${mentioned.id + message.guild.id}`).then(i =>{

        if(!i.text) return message.channel.send(`**This person has not been reviwed yet!**\n > .review @user <message> --#(# = 1-5)`);

        tools.splitEmbed(message.channel, i.text, 120000);
    })
}

exports.help = {
    name:`reviews`
}