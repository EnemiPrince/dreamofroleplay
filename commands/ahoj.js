const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("AHoj");

}

module.exports.help = {
    name: "ahoj"
}