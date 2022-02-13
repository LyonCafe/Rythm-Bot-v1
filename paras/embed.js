const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("GREEN")
  .setDescription(" <a:green_yes:908667433714343967>" +" <a:green_yes:908667433714343967>"+ text);

    await channel.send(embed)
}