const Discord = require("discord.js");
module.exports = (bot, member) => {
    member.guild.channels.find(`name`, `welcome`).send('Bye Bye **' + member.user.username + '** :wave:');
}