const Discord = require('discord.js');

const fs = require('fs');

const db = require('quick.db');

const bot = new Discord.Client();

const config = require('./config.json');
require("./util/eventLoader")(bot);

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");

    if(jsfiles.length <= 0) {
        console.log('No commands to load');
        return;
    }

    console.log('Loading ' + jsfiles.length + ' commands!');

    jsfiles.forEach((f, i) => {
        let props = require('./commands/' + f);
        console.log(`${i + 1}: ${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
});

var reload = (message, text) => {
  delete require.cache[require.resolve('./commands/' + text)];
  try {
    let cmdFile = require("./commands/" + text);
  } catch (err) {
    message.channel.send(`Problem loading ${text}: ${err}`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  }
    message.channel.send(`${text} reload was a success!`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  };
  exports.reload = reload;

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);
  let prefix;
  let ownerRole = message.guild.roles.find(`name`, `Brawlympic President`);

  //color code

  const color = function(){
    ownerRole.setColor(`#ff0000`)
  
    setTimeout(color1, 3000);
  },
  color1 = function(){
    ownerRole.setColor(`#ff8000`)
  
    setTimeout(color2, 3000);
  },
  color2 = function(){
    ownerRole.setColor(`#e4ff00`)
  
    setTimeout(color3, 3000);
  },
  color3 =  function(){
    ownerRole.setColor(`#60ff00`)
  
    setTimeout(color4, 3000);
  },
  color4 = function(){
    ownerRole.setColor(`#00ff2b`)
  
    setTimeout(color5, 3000);
  },
  color5 = function(){
    ownerRole.setColor(`#00e7ff`)
  
    setTimeout(color6, 3000);
  },
  color6 = function(){
    ownerRole.setColor(`#2200ff`)
  
    setTimeout(color7, 3000);
  },
  color7 = function(){
    ownerRole.setColor(`#8a00ff`)
  
    setTimeout(color8, 3000);
  },
  color8 = function(){
    ownerRole.setColor(`#f900ff`)
  
    setTimeout(color, 3000);
  }

//color();

  db.fetchObject(`guildPrefix_${message.guild.id}`).then(i => {

    if(i.text){
      prefix = i.text;
    } else {
      prefix = `.`;
    }

  if(!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(cmd) cmd.run(bot, message, args);

  if(command === prefix + `help`){
    let sentembed = new Discord.RichEmbed()
    .setTitle(`Your commands are being sent in DM`)
    .setColor("#ff0000")

    message.channel.send(sentembed);

    let helpList = fs.readFileSync('./commands/storage/commands.txt', `utf8`);

    message.author.send(helpList);
  };
});
  });

bot.login(config.token);