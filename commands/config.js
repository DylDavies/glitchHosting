const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (bot, message, args, tools) => {
    let channel
    let dmText
    let joinText
    let leaveText
    let autoRole
    db.fetchObject(`autoRole_${message.guild.id}`).then(roleFetched => {
        if(!roleFetched.text) autoRole = "*none*"
        else autoRole = roleFetched.text
    
        db.fetchObject(`messageChannel_${message.guild.id}`).then(channelIDFetched => {
            if(!message.guild.channels.get(channelIDFetched.text)) channel = "*none*";
            else channel = message.guild.channels.get(channelIDFetched.text)

                db.fetchObject(`joinMessageDM_${message.guild.id}`).then(joinDMFetched => {

                    if(!joinDMFetched.text) dmText = "*none*"
                    else dmText = joinDMFetched.text

                    db.fetchObject(`joinMessage_${message.guild.id}`).then(joinMessageFetched => {

                        if(!joinMessageFetched.text) joinText = "*none*"
                        else joinText = joinMessageFetched.text
                
                        db.fetchObject(`leaveMessage_${message.guild.id}`).then(leaveMessageFetched => {

                            if(!leaveMessageFetched.text) leaveText = "*none*"
                            else leaveText = leaveMessageFetched.text

                            let config = `**NOTE** {user} will display the user's name and {members} will display the number of users in the server!\n\n\n`
                            config += `**Logging Channel**\n > ${channel}\n\n`
                            config += `**Welcome DM Text**\n > ${dmText}\n\n`
                            config += `**Welcome Channel Text**\n > ${joinText}\n\n`
                            config += `**Leave Channel Text**\n > ${leaveText}\n\n`
                            config += `**Auto Role**\n > ${autoRole}\n\n`

                            tools.embed(message.channel, config)
                    })
                })
            })
        })
    })
}

exports.help = {
    name:`config`
}