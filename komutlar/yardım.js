const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('ff0005')
.setTitle(`${client.user.username}`)
.setDescription(`**\Botumuz Youtube İle Alakalı Bir Botdur\**

» Prefix: **${prefix}**
» Dil: :flag_tr: 

**» Abone Komutlari**

<a:sekil:816645248427491339> **${prefix}abone**
\`• Abone Rolu Verirsiniz.\`
<a:sekil:816645248427491339> **${prefix}abone-mesaj**
\`• Abone Mesajinin Nereye Gitceğini Belirlersiniz.\`
<a:sekil:816645248427491339> **${prefix}abone-sorumlusu @rol**
\`• Abone Sorumlusunun Rolunu Ayarlayabilirsin.\`
<a:sekil:816645248427491339> **${prefix}abone-rol @rol**
\`• Abone Rolunu Ayarlarsınız.\`

**» Genel Bot Komutlari**

<a:yildiz2:819857069276397619> **${prefix}istatistik**
\`• Botun İstatistiklerini Gösterir.\`
<a:yildiz2:819857069276397619> **${prefix}davet**
\`• Botun Davet Linkini Atar.\`
<a:yildiz2:819857069276397619> **${prefix}ping**
\`• Botun Pingini Gösterir.\`
<a:yildiz2:819857069276397619> **${prefix}kanal**
\`• Botun Sahibinin Youtube Kanalını Gösterir.\`
<a:yildiz2:819857069276397619> **${prefix}destek**
\`• Botun Destek Sunucusunu Gösterir.\`

» **__Not: Botun Rolünü En Üste Koymayı Unutmayınız Yoksa Çalışmaz!__**
`)
.setThumbnail(message.author.avatarURL({dynamic: true}))
.setTimestamp()
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["yardım","help"], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım.',
  usage: 'yardım'
};