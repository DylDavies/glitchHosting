const Discord = require("discord.js");
const chalk = require("chalk");
module.exports = bot => {
    console.log(chalk.bgGreen.black(`${bot.user.username} is online in ${bot.guilds.size} servers!`));

    const start = function(){
        bot.user.setActivity(`Testing`);

        setTimeout(end, 10000);
    }

    const end = function(){
        bot.user.setActivity(`Do not attempt to use developemental commands!`);

        setTimeout(start, 10000);
    }

    start();
}