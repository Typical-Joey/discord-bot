require('dotenv').config();

const ping = require('./commands/ping');
const servers = require('./commands/servers');

const commands = {
  ping,
  servers,
};


module.exports = async function commandHandler(msg) {
  const prefix = '!';
  if (msg.channel.id === process.env.CHANNELID) {
    if (msg.content[0] === prefix) {
      // Valid commands
      const command = msg.content.substring(1);
      commands[command](msg);
    }
  }
};
