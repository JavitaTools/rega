const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#FF0000")
.setFooter('©️ Copyright Rega 2020')
.addField('__STOCK__','__**Comando para verificar el stock**__\n\n`$spotify`: 3203 .\n`$cbs`: 1459 .\n`$disney`: 1001.\n`$hulu`: 650 .\n`$minecraft`: 0 .\n`$nitro`: unlimited .\n`$nordvpn`: 1200.\n`$origin` 5600.\n`$proxy`: unlimited .\n`$shein`: 500 .\n\n **✩** Recuerda que este es un bot gratuito, no todas las cuentas van a funcionar !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
