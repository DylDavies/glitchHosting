const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let ball = [`Yes! :smile:`,
              `Of Course! :clap:`,
              `Hell No!!!!! :rage:`,
              `No! :angry:`,
              `Maybe! :shrug:`,
              `IDK? :question:`]

  let color = [`#5dff00`,
                `00fff0`,
                `0800ff`,
                `ff00fb`]

  

  let crandom = Math.floor(Math.random()*color.length);
  let random = Math.floor(Math.random()*ball.length);
  let text = message.content.slice(1).trim().split(/ +/g);
  let string = text.slice(1).join(` `);

  if(string === ``) return message.channel.send(`No Question Provided! Please use the correct usage ( **.8ball Your Question Here** )`);

  let msg = await message.channel.send(`Generating...`);

  let embed = new Discord.RichEmbed()
  .setTitle(`:8ball: __**8BALL**__ :8ball:`)
  .setColor(`${color[crandom]}`)
  .addField(`:question: Question :question:`, `|    ${string}    |`)
  .addField(`:globe_with_meridians: Answer :globe_with_meridians:`, `|    ${ball[random]}    |`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/417259526157369354/418460073535471616/G453vy5.gif`)

  function del() {
    msg.delete();  
  }

  function send() {
    message.channel.send(embed);

    message.channel.send(`👍`);
    
    setTimeout(del, 2000);
  }

  send();
}

module.exports.help = {
  name: "8ball"
}
