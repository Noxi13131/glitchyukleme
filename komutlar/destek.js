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
      "Destek Sunucu Link",
      `İşte Destek Sunucum! [Tıkla](https://discord.gg/NkZZwbpJ8H)`
    )
    .setFooter(`YouTube Subscribe Destek Menüsü`, client.user.avatarURL());
  return message.channel.send(yardım);
  
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["channel"],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'davet',
  usage: 'davet işte aw'
};
