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
      "Bot Davet Link",
      `Botumuzu Sunucuya Ekle! [Tıkla](https://discord.com/oauth2/authorize?client_id=816643152928047114&scope=bot&permissions=805314622)`
    )
    .setFooter(`YouTube Subscribe Davet Menüsü`, client.user.avatarURL());
  return message.channel.send(yardım);
  
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["invite"],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'davet',
  usage: 'davet işte aw'
};
