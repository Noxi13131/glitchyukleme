const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => { 

  const yardım = new Discord.MessageEmbed()
    .setColor('ff0005')
    .setAuthor(`YouTube Subscribe`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField(
      "Youtube Kanal Link",
      `İşte Kanalım! [Tıkla](https://www.youtube.com/Zenard)`
    )
    .setFooter(`YouTube Subscribe Kanal Menüsü`, client.user.avatarURL());
  return message.channel.send(yardım);
  
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["channel"],
  permLevel: 0
};

exports.help = {
  name: 'kanal',
  description: 'davet',
  usage: 'davet işte aw'
};
