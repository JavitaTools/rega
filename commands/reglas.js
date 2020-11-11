const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#FF0000")       
//.setThumbnail('https://cdn.discordapp.com/attachments/775685234930876417/775696237084934154/logorega.png')
.setFooter('Ultima Actualizacion (10/11/2020)')
.addField('**Reglas**','\n**No esta permitido el Racismo**\n**No esta permitido el Clasismo**\n**No puedes hacer spam de ningún tipo**\n**No puedes pasar links de invitación a otros servidores de Discord**\n**No pedir cuentas a ningun miembro del staff**\n**No puedes pasar pornografia**\n');
message.channel.send(embed)
}
module.exports.help = {
  name: 'reglas'
}
