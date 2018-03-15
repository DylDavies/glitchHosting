const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== '350707981178109964') return;

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

      const words = message.content.split(" ").slice(1);
          try {
            const code = words.join(" ");
            let evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
      
            message.channel.send(clean(evaled), {code:"xl"});
          } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
          };
}

module.exports.help = {
    name:'eval'
}