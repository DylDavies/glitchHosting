const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let ping = Date.now() - message.createdTimestamp
    message.channel.send(`Current Pong is... **${ping}** ms`);
}

module.exports.help = {
    name: 'ping'
}