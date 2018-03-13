const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  var textArray = [
    `Bodvar`,
    `Cassidy`,
    `Orion`,
    `Lord Vraxx`,
    `Gnash`,
    `Sir Roland`,
    `Scarlet`,
    `Thatch`,
    `Ada`,
    `Sentinal`,
    `Brynn`,
    `Asuri`,
    `Barraza`,
    `Ember`,
    `Azoth`,
    `Diana`,
    `Kor`,
    `Wu Shang`,
    `Val`,
    `Mirage`,
    `Nix`,
    `Mordex`,
    `Yumiko`,
    `Artemis`,
    `Xull`,
    `Kaya`
  ];
  var Legends = Math.floor(Math.random()*textArray.length);
  message.channel.send(`${textArray[Legends]}`);
}

module.exports.help = {
    name: `playrandom`
}