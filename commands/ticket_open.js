const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "657708736374374410";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {
        
        if (channel.name == username.toLoweCase() + "-" + userDiscriminator) {

            message.channel.send("Úspěšně jste si vytvořili Ticket!");

            bool = true;

        }

    });

    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Ahoj" + message.author.username)
        .setFooter("Byla vytvořena room!");

    message.channel.send(embedCreateTicket);

    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

        createdChan.setParent(categoryId).then((settedParent) => {

            settedParent.overwritePermissions(message.guild.roles.find("name", "@everyone"), { "READ_MESSAGES": false });

            settedParent.overwritePermissions(message.author, {

                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });

            var embedParent = new discord.RichEmbed()
                .setTitle("Ahoj" + message.author.username.toString())
                .setFooter("Napište Váš problém. Pokusíme se ho co nejdříve vyřešit!");
    
            settedParent.send(embedParent);

        })

    })

}

module.exports.help = {
    name: "ticket"
}