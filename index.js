const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");
const bot = new discord.Client({disableEveryone: true});
bot.commands = new discord.Collection();


fs.readdir("./commands/", (err, files) =>{

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Nenalezeno!")
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} načten!`);
        bot.commands.set(props.help.name, props);
    });

})
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

    

    var commandfile = bot.commands.get(command.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,arguments);

});


bot.login(process.env.token); 