require('dotenv').config();
const Discord = require('discord.js');
const _ = require('lodash');
const serverConfig = require('./serverConfig');


module.exports = function(msg, args) {
  const serverName = _.lowerCase(args[0]);
  for (const server in serverConfig) {
    if (server == serverName) {
      const serverInfoEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(_.capitalize(serverConfig[server].name))
      // Info about the server
        .addFields(
          { name: 'Status', value: serverConfig[server].status },
          { name: 'IP', value: serverConfig[server].ip },
        );
      msg.channel.send(serverInfoEmbed);
    }
  }

};
