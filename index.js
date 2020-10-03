require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);
const PREFIX = '$';

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => {
    let command = msg.content;
    if (command == '1') {
      msg.channel.send('Shhhhhhhhh............');
      mute(msg, true);
    } else if (command == '2') {
      msg.channel.send('Who is the impostor');
      mute(msg, false);
    }
});

function mute(message, condition) {
  let channel = message.guild.channels.get('756929143861542929');
  for (const [memberID, member] of channel.members) {
    member.setMute(condition);
  }
}
