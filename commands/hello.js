module.exports = {
  name: "hello",
  description: "This command makes the bot say hello!",
  execute(message, args) {
    message.channel.send("Hi!");
  },
};
