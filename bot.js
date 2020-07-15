var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "732984908355600435" && message.channel.id === "732998961291591681"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "sup" && message.channel.id === "732998961291591681"){
                message.channel.send('GOOD WBU?') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand >sup right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '>' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
