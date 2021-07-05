const client = require("../index")
const config = require("../config.json");
const loadCommands = require("../Commands/load-commands");
const commandBase = require("../Commands/command-base");
const { Message } = require("discord.js");
const mongoose = require("mongoose")

require("dotenv").config()

client.on("ready", () => {
    const userCount = client.guilds.cache
    .map((guild) => guild.memberCount)
    .reduce((p, c) => p + c, 0);
  console.log(`Ready! Logged in as ${client.user.tag}!`);
  client.user.setPresence({
     activity: {
       name: `?help || ${userCount} Gamers!`,
       type: "WATCHING"
     },
     status: 'dnd'
   })
  loadCommands(client)
  commandBase.loadPrefixes(client)
  mongoose.connect(process.env.mongoPath, {
    useFindAndModify: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log("Connected To Mongo DB!"))
})