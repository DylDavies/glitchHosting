const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have permissions to manage messages!");
   
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("No user specified")
   
    if(toMute.id === message.author.id) return message.channel.sendMessage("This person is yourself, if you hate yourself, cheer up, you're not a robot. :sob:")
    if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("DON'T DISRESPECT YOUR SUPERIORS! (The person you tried to mute has more power!)")
   
    let role = message.guild.roles.find(r => r.name === "muted");
   
    if(toMute.roles.has(role.id)) return message.channel.sendMessage("Error! This user is already muted! He can't talk.");
   
    toMute.addRole(role);
    message.channel.sendMessage("User has been muted! The day that he/she was muted was a very rainy day.");
   
}

module.exports.help = {
    name: 'mute'
}