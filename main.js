const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "-";

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log("Project is ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if(message.channel.type == "dm") return;

  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "hello") {
    client.commands.get("hello").execute(message, args);
  }
});

client.login(your token);
