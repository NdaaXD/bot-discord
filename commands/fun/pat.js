const discord = require("discord.js");
const random = require("easyfunjs").Img

module.exports = {
  name: "pat",

  description: "Pat someone",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    
    let data = await random.getAnimeImgURL("pat");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} pats ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};