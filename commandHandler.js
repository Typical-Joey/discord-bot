module.exports = async function commandHandler(msg) {
  if (msg.channel.id === "869297826868391947") {
    if (msg.content === "ping") {
      msg.channel.send("pong");
    }
  }
};
