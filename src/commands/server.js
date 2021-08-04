require('dotenv').config();
const Discord = require('discord.js');
const _ = require('lodash');


module.exports = function(msg, args) {

  const name = _.capitalize(args[0]);
  if (name == 'Minecraft') {
    const serverInfoEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(name)
    // Info about the server
      .addFields(
        { name: 'Status', value: 'Active' },
        { name: 'IP', value: process.env.MINECRAFTIP },
      );
    msg.channel.send(serverInfoEmbed);
  }
  else if (name == 'Rust') {
    const serverInfoEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(name)
    // Info about the server
      .addFields(
        { name: 'Status', value: 'Inactive' },
        { name: 'IP', value: process.env.RUSTIP },
      );
    msg.channel.send(serverInfoEmbed);
  }

};
