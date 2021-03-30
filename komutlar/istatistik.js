const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const msg = new Discord.MessageEmbed()
    .setColor('ff0005')
    .setFooter(client.user.tag, client.user.avatarURL())
    .addField("» **Sahibim**", "<@804486183962542121> | Zenard#0001")
    .addField(
      "» **Ram Kullanımı**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField(
      "» **Çalışma Süresi**",
      moment
        .duration(client.uptime)
        .format(" D [gün], H [saat], m [dakika], s [saniye]")
    )
    .addField(
      "» **Kullanıcılar**",
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString(),
      true
    )

    .addField(
      "» **Sunucular**",
      client.guilds.cache.size.toLocaleString(),
      true
    )
    .addField(
      "» **Kanallar**",
      client.channels.cache.size.toLocaleString(),
      true
    )
    .addField("» **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS sürüm**", `${process.version}`, true)
    .addField("» **Ping**", client.ws.ping + " ms", true)

    .setThumbnail(client.user.avatarURL())

    .addField(
      `**» Linkler**`,
      `
   [Davet Linki](https://discord.com/oauth2/authorize?client_id=816643152928047114&scope=bot&permissions=805314622) 
   [Destek Sunucusu](https://discord.gg/NkZZwbpJ8H)`
    )

    .setImage(
      "https://cdn.discordapp.com/attachments/815698674360385536/816634955282251796/standard.gif"
    );
  return message.channel.send(msg);
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["i","botbilgi","bot-bilgi","botinfo","bot-info","stats"
  ],
  permLevel: 0
};

exports.help = {
  name: "istatistik"
};