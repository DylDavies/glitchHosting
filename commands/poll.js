const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You do not have permission to use this command!`).then(console.error);
    let text = message.content.slice(1).trim().split(/ +/g);
    let string = text.slice(1).join(` `);
    if(string === ``)return message.channel.send(`No poll questions provided!`);
    let questions = string.split(`|`);
    let channel1 = questions[0];
    let q = questions[0].split(` `).slice(1);
    let q1 = q.join(` `);
    let q2 = questions[1];
    if(!q1 || !q2)return message.channel.send(`You must provide 2 questions for me to **poll**!\nUsage: **.poll channel_over_here question1 before the => | <= question2 after that!**`);
    let Channel = channel1.split(` `).shift();
    let PollChannel = message.guild.channels.find(`name`, `${Channel}`);
    if(!PollChannel) return message.channel.send('No poll channel to use!\nUsage: **.poll channel_over_here question1 before the => | <= question2 after that!**\nRemember not to use the **#**!');
    
    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`)
    .setThumbnail(`${message.author.avatarURL}`)
    .addField(`React with :one:`, `${q1}`)
    .addField(`React with :two:`, `${q2}`)
    .setColor("#ff0000")
    .setTimestamp()

    let msg = await PollChannel.send(embed);
    msg.react(`\u0031\u20E3`);
    msg.react(`\u0032\u20E3`);

    message.channel.send('Poll Posted!!!');
}

module.exports.help = {
    name:`poll`
}