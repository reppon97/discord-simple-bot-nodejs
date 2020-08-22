require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

// Monitor all messages through console
bot.on('message', msg => {
    console.log(msg.content);
});

// If you're gonna build extensive project, you shouldn't use else if statements. Instead use a Command Handler
bot.on('message', msg => {
    if (msg.content.toLowerCase() === 'hi') {
        msg.reply('Hello!');
    } else if (msg.content.toLowerCase() === 'how are you doing?') {
        msg.reply('Fine, thanks!');
    } else if (msg.content.startsWith('!kick')) {
        if (msg.mentions.users.size) {
            const taggedUser = msg.mentions.users.first();
            msg.channel.send(`You wanted to kick ${taggedUser.username}!`);
        }
    }
});

bot.login(TOKEN);
