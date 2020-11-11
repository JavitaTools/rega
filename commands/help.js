const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#FF0000")       
.setThumbnail('https://cdn.discordapp.com/attachments/775685234930876417/775696237084934154/logorega.png')
.setFooter('©️ Copyright Rega 2020')
.addField('__Asistente__','__**Comandos del Generador**__\n\n`!spotify` Para obtener una cuenta de spotify .\n`!cbs` Para obtener una cuenta de cbs .\n`!disney` Para obtener una cuenta de disney.\n`!hulu` Para obtener una cuenta de hulu .\n`!minecraft` Para obtener una cuenta de minecraft .\n`!nitro` Para obtener un codigo de discord .\n`!nordvpn` Para obtener una cuenta de NordVPN .\n`!origin` Para obtener una cuenta de Origin .\n\n **✩** Recuerda que este es un bot gratuito, no todas las cuentas van a funcionar !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
