const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

    console.log(`**${bot.user.username}** je nyní online!`);

    bot.user.setActivity("Ukazuje to klukům.", {type: "STREAMING"});

});

bot.on("message", async message => {
    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArra[0];

    var arguments = messageArray.slice(1);

});


bot.login(process.env.token); 