const { Client, Intents, Collection } = require('discord.js');

const bot = new Client({ intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES
  ]
});

bot.config = require('./config');
bot.commands = new Collection();


require('./src/Structure//Handler/Event')(bot);
require('./src/Structure//Handler/Command')(bot);


bot.login(bot.config.clients.token);