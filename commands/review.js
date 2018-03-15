const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args, tools) => {
    if (!message.mentions.members.first()) return message.channel.send('**Please specify a user**\nExample > *~review __@user__ <message> --#*');
    if (!args.join(" ")) return message.channel.send('**Please specify a message**\nExample > *~review @user __<message>__ --#*');

    let rating;
    let msg = args.join(" ");
    let mentioned = message.mentions.members.first();

    if (msg.includes("--5")) rating = '​★★★★★';
    else if (msg.includes("--4")) rating = '​★★★★☆';
    else if (msg.includes("--3")) rating = '​★★★☆☆';
    else if (msg.includes("--2")) rating = '​★★☆☆☆';
    else if (msg.includes("--1")) rating = '​★☆☆☆☆';
    else return message.channel.send('**Please specify a rating of 1-5 at the end of the message**\n Example > *~review @user <message> __--#__*')

    msg = msg.trim().replace('--5', '').replace('--4', '').replace('--3', '').replace('--2', '').replace('--1', '').replace(mentioned, '');

    db.fetchObject(`userReviews_${mentioned.user.id + message.guild.id}`).then(i => {

        if (!msg) return message.channel.send('**Please specify a message**\nExample > *~review @user __<message>__ --#*');

        let review = `${message.author.tag} - ${rating}\n` 
        review += ` > *${msg.trim()}*\n\n`

        let text = review + i.text;

        db.updateText(`userReviews_${mentioned.user.id + message.guild.id}`, text.trim()).then(o => {

            message.channel.send(`**${message.author.tag} reviewed ${mentioned.user.tag}**\n > *${msg.trim()}*`)

        })


    })
}

exports.help = {
    name:`review`
}