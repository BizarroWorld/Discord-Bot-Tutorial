const Discord = require("discord.js");

// Define Client, Export it.
const client = new Discord.Client();
module.exports = client;

// Define Prefix
const prefix = "-";

const fs = require("fs");
const path = require("path")

// Use Dotenv to Secure Token
require("dotenv).config()

// Start Command Handling Process
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

// Listen For Messages
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if(message.channel.type == "dm") return;

  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "hello") {
    client.commands.get("hello").execute(message, args);
  }
});

// Event Handler
readdirSync("./Events/").forEach((file) => {
  const events = readdirSync("./Events/").filter((file) =>
    file.endsWith(".js")
  );

  for (let file of events) {
    let pull = require(`./Events/${file}`);

    if (pull.name) {
      client.events.set(pull.name, pull);
    } else {
      continue;
    }
  }
});

client.login(process.env.TOKEN);
