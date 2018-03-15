const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args, tools) => {
    let role
    let Message
    let DM
    let joinMessage
    let leaveMessage
    let prefix

    db.fetchObject(`autoRole_${message.guild.id}`).then(autoRole => {

        if(!autoRole || autoRole.text.toLowerCase() === `none`) role = "*none*"
        else role = autoRole.text

        db.fetchObject(`messageChannel_${message.guild.id}`).then(channel => {
            if(!channel || channel.text.toLowerCase() === `none`) role = "*none*"
            else Message = `<#${channel.text}>`

            db.fetchObject(`joinMessageDM_${message.guild.id}`).then(DMM => {
                if(!DMM || DMM.text.toLowerCase() === `none`) role = "*none*"
                else DM = DMM.text

                db.fetchObject(`joinMessage_${message.guild.id}`).then(jMessage => {
                    if(!jMessage || jMessage.text.toLowerCase() === `none`) role = "*none*"
                    else joinMessage = jMessage.text

                    db.fetchObject(`leaveMessage_${message.guild.id}`).then(lMessage => {
                        if(!lMessage || lMessage.text.toLowerCase() === `none`) role = "*none*"
                        else leaveMessage = lMessage.text

                        db.fetchObject(`guildPrefix_${message.guild.id}`).then(p => {
                            if(!p || p.text.toLowerCase() === `none`) role = "."
                            else prefix = p.text

                            let response = `__**General Settings**__\n\n\n`
                            response += `**Autorole** (.setAutoRole <rolename>)\n > ${role}\n\n`
                            response += `**Prefix** (.setPrefix <prefix>)\n > ${prefix}\n\n\n\n`
                            response += `__**Welcome Messages**__\n\n\n`
                            response += `**Welcome Channel** (.setChannel #channel)\n > ${Message}\n\n`
                            response += `**DM Welcome** (.setDM <message here>)\n > ${DM}\n\n`
                            response += `**Guild Welcome** (.setWelcome <message here>)\n > ${joinMessage}\n\n`
                            response += `**Guild Leave** (.setLeave <message here>)\n\n > ${leaveMessage}\n\n\n\n`
                            response += `**Copy the heading text of the module you want and post it in the chat __without__ the prefix** example : welcome messages (NOTE caps does not matter)`

                            let settings = new Discord.RichEmbed()
                            .setColor(`#ff0000`)
                            .setTitle(`:wrench: **Settings** :wrench:`)
                            .setDescription(response)

                            message.channel.send(settings)
                            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {time: 30000});

                            collector.on("collect", message => {

                                if(message.content.toLowerCase() === `general settings` || message.content.toLowerCase() === `generalsettings`){
                                    tools.embed(message.channel, `**To set autorole do : **.autorole <rolename>\n\n**To set the prefix do : **.setPrefix <prefix>`);
                                }if(message.content.toLowerCase() === `welcome messages` || message.content.toLowerCase() === `welcomemessages`){
                                    let config = `**NOTE** {user} will display the user's name and {members} will display the number of users in the server!\n\n\n`
                                    config += `**Logging Channel** .setChannel to change\n > ${Message}\n\n`
                                    config += `**Welcome DM Text** .setDM to change\n > ${DM}\n\n`
                                    config += `**Welcome Channel Text** .setWelcome to change\n > ${joinMessage}\n\n`
                                    config += `**Leave Channel Text** .setLeave to change\n > ${leaveMessage}\n\n`

                                    tools.embed(message.channel, config)
                                }
                            })
                        })
                    })
                })
            })
        })
    })
}

exports.help = {
    name:`settings`
}