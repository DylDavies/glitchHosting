module.exports = {
      embed: function(channel, message, timer) { 
    
            channel = channel.channel || channel; 
            
            channel.send({embed:{ 
              description: message,
              color: 0xff0000 
            }}).then(msg => { 
              if (!isNaN(timer)) msg.delete({timeout: timer}); 
            });
            
          },
  
          splitEmbed: function (channel, description, deleteTimer){
            let fields = Math.floor(description.length / 2048);
            let remaining = fields - (description.length % 2048);

            if(remaining < 0) fields += 1;

            for (var i = 0; i < fields; i++) {
                channel.send({embed:{
                    description: description.substring(0, 2048),
                    color: 0xff0000
                }})

                description = description.slice(2048)
            }
        }
}