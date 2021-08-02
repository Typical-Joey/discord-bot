const Discord = require('discord.js');

const serverList = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Server IP\'s')
  .addFields(
    { name: 'Minecraft', value: '2.2.2.2' },
    { name: 'Rust', value: '1.1.1.1' },
  );

module.exports = function(msg) {
  msg.channel.send(serverList);
};
