const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Error! User not found in the big boy database.");
    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send("Error! Reason required for report!")

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report details used by admins.")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported by", `${message.author.tag} with ID: ${message.author.id}`)
    .addField("Report performed in", message.channel)
    .addField("Performed at", message.createdAt)
    .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Error! No report channel found! Tell the admin or owner to create a channel called reports for this command to work! Also, make the bot an administrator!");

      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
      if(reason) return message.channel.send("User succesfully reported!");
      return;
  }

module.exports.help = {
    name: 'report'
}