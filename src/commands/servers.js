require('dotenv').config();
const Discord = require('discord.js');

const serverListEmbed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Server IP\'s')
  .addFields(
    { name: 'Minecraft', value: process.env.MINECRAFTIP },
    { name: 'Rust', value: process.env.RUSTIP },
  );

module.exports = function(msg) {
  msg.channel.send(serverListEmbed);
};
