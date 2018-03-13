const reqEvent = (event) => require(`../events/${event}`)
module.exports = bot => {
    bot.on(`ready`, () => reqEvent(`ready`)(bot));
    bot.on(`guildMemberAdd`, () => reqEvent(`guildMemberAdd`)(bot));
    bot.on(`guildMemberRemove`, () => reqEvent(`guildMemberRemove`)(bot));
};
