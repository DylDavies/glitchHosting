const Discord = require("discord.js");
module.exports = (bot, member) => {
  if(member.guild.id !== `405065054262919169`)return;
    member.guild.channels.find(`name`, `welcome`).send('Bye Bye **' + member.user.username + '** :wave:');
}