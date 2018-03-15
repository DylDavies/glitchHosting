const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let steam = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let smash = args.join(" ").slice(22);
    if(!smash) return message.channel.send(`Error! Please fill in your smash.gg username in this format: !signup @yourregion (smash.gg username) (MAKE SURE TO @MENTION THE REGION USER!)`);
    if(!steam) return message.channel.send(`Error! Please fill in your smash.gg username in this format: !signup @yourregion (smash.gg username) (MAKE SURE TO @MENTION THE BREGION USER!)`);
  
    let signupEmbed = new Discord.RichEmbed()
    .setDescription(`A discord user signed up with the information`)
    .addField("Smash.gg username", smash)
    .addField("Discord username", `${message.author.tag}`)
    .addField("Region", steam)
  
    let reportschannel = message.guild.channels.find(`name`, "signup");
    if(!reportschannel) return message.channel.send("Error! No signup channel found! Tell the admin or owner to create a channel called signup for this command to work! Also, make the bot an administrator!");
  
    if(smash) return reportschannel.send(signupEmbed);
    if(smash) return message.channel.send("You signed up! See you at the tournament!");
  
    return;
    }

module.exports.help = {
  name: "signup"
}