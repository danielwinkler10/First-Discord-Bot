const discord = require('discord.js');
const fs = require('fs');
const lodash = require('lodash');


var prem = ["Owner", "Admin"];
var bot = new discord.Client();
var channelGetName = 0;

//----------------------------------------------------------------------------------------//

bot.on("message", msg => {
    if (msg.author.bot)
        return;

    isAdmin = msg.member.roles.filterArray(role => { return role.name === 'OWNER' || role.name === 'ADMIN'; }).length;
    if (isAdmin === 0) {
        return;
    }

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

bot.login("key");
