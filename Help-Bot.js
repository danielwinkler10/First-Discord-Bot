const discord = require('discord.js');
const fs = require('fs');
const lodash = require('lodash');


var prem = ["Owner", "Admin"];
var bot = new discord.Client();
var channelGetName = 0;
var getPerm =

//----------------------------------------------------------------------------------------//

bot.on("message", msg => {
    if (msg.author.bot)
        return;

    if (msg.member.roles.array().name !== "Owner")
        return;

    var text = msg.content;

    if (text.indexOf("!move all ") > -1) {
        channelGetName = text.slice(10, 9999);
        findChannel = bot.channels.find('name', channelGetName);
        bot.channels.findAll('type', 'voice').forEach(channelInfo => {
            channelInfo.members.array().forEach(memberNumber => {
                memberNumber.setVoiceChannel(findChannel);
            });
        });
    }
});

bot.login("MjQxODIzNzY1MDQ0OTIwMzIy.CvXq1A.SfLRDFjEKTQZPhRQq5ewSkpjdbc");
