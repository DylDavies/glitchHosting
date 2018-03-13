const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
    let toKick = message.mentions.users.first();
    if(!toKick) return message.channel.send(`You must provide a user to kick!`);
    let reason = args.join(` `);
    if(!reason) return message.channel.send(`You must provide a reason to kick the user!`);
    let modRole = message.guild.roles.find(`name`, `Manager`) || message.guild.roles.find(`name`, `mod`);
    if(!modRole) return message.channel.send(`There is no mod role\n Please make one with the name \`mod\``);
    if(!message.member.roles.has(modRole.id)) return message.channel.send(`Insufficient permisiions to perform the task!`);

    message.guild.member(toKick).kick()
    .then(() => console.log(`User kicked from: ${message.guild.name}\nUser Kicked: ${toKick.username}#${toKick.discriminator}`));

    message.channel.send(`User ${toKick} succesfully kicked!`);
}

exports.help = {
    name:`kick`
}