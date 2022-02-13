const { MessageEmbed} = require("discord.js")
const delay = require('delay');

module.exports = {
  name:"bass",
   botPermission: ["EMBED_LINKS", "READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","ADD_REACTIONS","CONNECT","SPEAK","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD"],
  
  run: async(client,message,args) => {
    
   
const player = message.client.manager.players.get(message.guild.id)
  
    	if (args[0].toLowerCase() == 'reset' || args[0].toLowerCase() == 'off') {
		player.clearEffects()
		const msg = await message.channel.send(`<a:loading1:904369053144068096>Turning off **bass**.`);
			const embed = new MessageEmbed()
				.setDescription('turned off **bass**')
				.setColor("BLUE");
			await delay(5000);
			return msg.edit('', embed);
    	}
    
     if (!player) {
    let embed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription("<:cross8:908666926216134717> There is nothing playing")
    return message.channel.send(embed)
  }

  const { channel } = message.member.voice

  if (!channel) {
    let embed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription("<:cross8:908666926216134717> Please connect to a voice channel")
    return message.channel.send(embed)
  }

   if (channel.id !== player.voiceChannel) {
    let embed = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`must join be in same voice  channel`)
    return message.channel.send(embed)
  }

 const m1 = await message.channel.send("<a:load:908666726529531944>Turning on **bass**.");
	// Change bassboost value
	player.setBassboost(!player.bassboost)
	
	 const bass = new MessageEmbed()
            .setTitle("<a:green_yes:908667433714343967> Turned on: bass",)
            .setColor('GREEN');

        await delay(5000);
        m1.edit('', bass);
       
  }
}