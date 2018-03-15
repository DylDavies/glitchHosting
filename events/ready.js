const Discord = require("discord.js");
const chalk = require("chalk");
const tools = require("../functions.js");
module.exports = (bot) => {
    console.log(chalk.bgGreen.black(`${bot.user.username} is online in ${bot.guilds.size} servers!`));

    const start = function(){
        bot.user.setActivity(`Adding custom server auto-roles!`);

        setTimeout(end, 10000);
    }

    const end = function(){
        bot.user.setActivity(`Do not attempt to use developemental commands!`);

        setTimeout(start, 10000);
    }

    start();

    let logChannel = bot.channels.get(`423513179667169280`);

    const ready1 = function(){
        tools.embed(logChannel, ':white_check_mark: Commands Loaded! :white_check_mark:');

        setTimeout(ready2, 2000)
    }
    const ready2 = function(){
        tools.embed(logChannel, ':white_check_mark: DataBase Loaded! :white_check_mark:');

        setTimeout(ready3, 2000)
    }
    const ready3 = function(){
        tools.embed(logChannel ,`:white_check_mark: Bot Ready! :white_check_mark:`);

    }

    //ready1();
}