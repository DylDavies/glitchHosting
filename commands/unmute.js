const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You do not have permissions to manage messages! You are but a slave to this society!");
   
            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toMute) return message.channel.sendMessage("No user specified")
     
            if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("It's a nice thing to do, help superiors. But an even HIGHER role decided he should be muted.")
     
            let role = message.guild.roles.find(r => r.name === "Muted");
     
            if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Error! This user is not muted! Can't do anything about that.");
     
            toMute.removeRole(role);
            message.channel.sendMessage("User has been unmuted! A very happy moment for all!");
}

module.exports.help = {
    name: 'unmute'
}