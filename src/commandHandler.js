require('dotenv').config();

const ping = require('./commands/ping');
const servers = require('./commands/servers');
const server = require('./commands/server');

const commands = {
  ping,
  servers,
  server,
};


module.exports = async function commandHandler(msg) {
  const prefix = '!';
  let token = msg.content;

  // Validates the correct channel id
  // if (msg.channel.id === process.env.CHANNELID) {
  // }
  // Validates a command was attempted

  if (token[0] === prefix) {
    token = token.substring(1).split(' ');
    const command = token.shift();
    // Validates command
    if(commands[command]) {
      const args = token;
      commands[command](msg, args);
    }
  }
};
