const client = require("../index")

client.on('guildDelete', (client) => {
    const userCount = client.guilds.cache
        .map((guild) => guild.memberCount)
        .reduce((p, c) => p + c, 0);
        
        client.user.setPresence({
            activity: {
              name: `?help || ${userCount} Gamers!`,
              type: "WATCHING"
            },
            status: 'dnd'
          })
        
          client.channels.cache.get(logChannel).send(
            new MessageEmbed()
            .setTitle("Server Removed!")
            .addField('Guild Info!', `${guild.name} (${guild.id})`)
            .addField('Owner Info', `${guild.owner} (${guild.owner.id})`)
            .addField('Members!', `${guild.memberCount} members!`)
            .setFooter(`Currently in ${client.guilds.cache.size} guilds!`)
            .setTimestamp()
            .setThumbnail(guild.iconURL({ dynamic: true}))
            .setColor("RED")
          )
})