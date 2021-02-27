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

client.once("ready", () => {
  console.log("Project is ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "hello") {
    client.commands.get("hello").execute(message, args);
  }
});

client.login("ODE0NjUwMjc0OTA3MjkxNjY4.YDg8MQ.K1py7SdoqSoYixKSdAetuvTua-8");
