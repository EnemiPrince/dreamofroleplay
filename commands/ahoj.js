const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("Ahoj");

}

module.exports.help = {
    name: "ahoj"
}