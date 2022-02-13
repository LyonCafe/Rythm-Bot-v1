const discord  =  require("discord.js")
module.exports = {
  name: "invite",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS"],
 
  run: async (client,message,args) => {
    
    
    const embed = new discord.MessageEmbed()
    .setColor("GREEN")
 .setAuthor("Coded By Insidious#6099",client.user.displayAvatarURL())
.setDescription(`

[RYTHM MUSIC](https://discord.gg/real-bot)    

[SUPPORT SERVER](https://discord.gg/U3EuWhP63h)`)
message.channel.send(embed)


}}