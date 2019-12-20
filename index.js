const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();


////////////////////////////////////////////////////////////////////////////////
            // Ukazování zda je bot online + co právě dělá :D //
bot.on("ready", async () => {

    console.log(`**${bot.user.username}** je nyní online!`);

    bot.user.setActivity("Vytváříme Ticket Systém!", {type: "PLAYING"});

});
////////////////////////////////////////////////////////////////////////////////
bot.on("message", async message => {
    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArra[0];

    var arguments = messageArray.slice(1);

    if( command === `${prefix}ahoj`){

        return message.channel.send("Mrdat");

    }
    

});


bot.login(process.env.token); 