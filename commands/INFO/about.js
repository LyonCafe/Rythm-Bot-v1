const discord  =require("discord.js")
module.exports  = {
name: "about",
aliases: ["info","botinfo","stats"], 
botPermission: ["EMBED_LINKS","USE_EXTERNAL_EMOJIS"],
run : async (client,message,args )=> {
  
  
  
  let embed  = new discord.MessageEmbed()
    
   .setColor("GREEN")
 .setAuthor(`${client.user.username} Information`,client.user.displayAvatarURL())
 
    
.addField(`
**DEVELOPERS**`,
`<a:king:908665530506965022> Insidious#6099`)

.addField(`**PLATFORM**`,
`${process.platform}`)

.addField(`**SERVERS**`,
`${client.guilds.cache.size}`)

.addField(`**PING**`,
`${client.ws.ping}`)

.addField(`**GUILD ID**`,
`${message.guild.id}`)





message.channel.send(embed)
}}