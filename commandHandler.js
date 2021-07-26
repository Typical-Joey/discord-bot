require("dotenv").config();
module.exports = async function commandHandler(msg) {
  const prefix = "!";
  if (msg.channel.id === process.env.CHANNELID) {
    if (msg.content === `${prefix}ping`) {
      msg.channel.send("pong");
    }
  }
};
