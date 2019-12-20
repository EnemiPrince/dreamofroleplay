const discord = require("discord.js");
const botConfig = require("../botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFile = files.filter(f => f.split(".").pop() === "js");

    if (jsFile.length <= 0) {
        console.log("Commandy nenalezeny!");
        return;
    }

    jsFile.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`Command: ${f} byl nalezen`);

        bot.commands.set(fileGet.help.name, fileGet);

    })

});
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

    

    var commands = bot.commands.get(command.slice(prefix.length));

    if(commands) commands.run(bot, message, arguments);

});


bot.login(process.env.token); 