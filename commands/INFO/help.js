const discord  =  require("discord.js")
module.exports = {
  name: "help",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => { 
    
    const embed = new discord.MessageEmbed()
    .setColor("GREEN")
 .setAuthor("help comammd",client.user.displayAvatarURL())
 .setURL(``)
.setDescription(`

**<a:musicop:908687658262331433> Everyone comammds <a:musicop:908687658262331433>**
\`clear, join, leave, loop, move, nowplaying, pause, play,previous, queue, remove, resume, search, skip, seek, stop, volume\`

**<a:money:908685366184271923> Filters commands <a:money:908685366184271923>**
\`24/7, radio, bass, bassboost, deepbass, earrape, nightcore, pitch, pop, reset, soft, speed, television, vaporwave\`

**<a:settings:908685063330353232> Utility commands <a:settings:908685063330353232>**
\`about, prefix, ping, lavalink, uptime, invite, shard\`

**<a:info:908687982666608640> Simply Musical DOCS <a:info:908687982666608640>**
[Join Support](https://discord.gg/U3EuWhP63h)`)
 
.setFooter("Coded By Insidious#6099")
message.channel.send(embed)
  }
}