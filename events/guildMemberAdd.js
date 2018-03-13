const Discord = require("discord.js");
module.exports = (bot, member) => {
    member.guild.channels.find(`name`, `welcome`).send(`Welcome <@${member.user.id}> hope you enjoy your stay in **${member.guild.name}**`);
}
