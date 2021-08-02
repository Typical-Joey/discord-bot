require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const commandHanlder = require('./commandHandler');
const token = process.env.DISCORDTOKEN;

client.once('ready', () => {
  console.log('I am alive');
});

client.on('message', commandHanlder);


// Must be the last line
client.login(token);
