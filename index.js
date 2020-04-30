const Discord = require("discord.js");

var bot = new Discord.client();

bot.on("ready", function() {
    bot.user.setGame("iswile, !help");
    console.log("le bot a bien été connecté");
});

bot.login("NTE3MzI1NzMxMzgyOTUxOTM2.Xqs8ow.C0O5v6j81m4jjwwEfAQkmjjc9-0");
