const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating pfp....");

  await message.channel.send({files: [
      {
          attachment: message.author.displayAvatarURL,
          name: "pfp.png"
      }
  ]});

  msg.delete();
}

module.exports.help = {
  name: "pfp"
}