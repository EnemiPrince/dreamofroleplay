const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const categoryId = "657708736374374410";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.array.forEach(element => {
        
        if (channel.name == userName.toLoweCase() + "-" + userDiscriminator) {

            message.channel.send("Úspěšně jste si vytvořili Ticket!");

            bool = true;

        }

    });

    if (bool == true) return;

    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Ahoj" + message.author.username)
        .setFooter("Byla vytvořena room!");

    message.channel.send(embedCreateTicket);

}

module.exports.help = {
    name: "ticket"
}