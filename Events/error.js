const client = require("../index")

// Error Handling
client.on('error', () => {
    console.log(err).catch(err)
    message.channel.send("Something went wrong!")
})
