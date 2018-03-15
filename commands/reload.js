const main = require('../index.js');
module.exports.run = async (bot, message, args) => {
    let text = args.join(` `);
    main.reload(message, text);
}

module.exports.help = {
    name:`reload`
}