const Discord = require("discord.js");
module.exports = (bot, member) => {
    if(member.guild.id !== `405065054262919169`)return;
    member.guild.channels.find(`name`, `welcome`).send(`Welcome <@${member.user.id}> hope you enjoy your stay in **${member.guild.name}**`);
}
