const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.
    
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if(message.author.bot) return;
    
    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    if(!message.content.startsWith(config.prefix)) return;
    
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    // Let's go with a few common example commands! Feel free to delete or change those.
    
    if(command === "ping") {
      message.delete().catch(O_o=>{});
      // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
      // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
      const m = await message.channel.send("Ping?");
      m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
    if(command === "about") {
        const About = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('About')
  .setURL('')
  .setAuthor(`${config.BotName}`, '', '')
  .addFields(
    { name: 'Version', value: `${config.BotVersion}`, inline: true },
    //{ name: '\u200B', value: '\u200B' },
    { name: 'Prefix', value: `${config.BotPrefix}`, inline: true },
)
  .setDescription(`About ${config.BotName}`)
  .setThumbnail('')
  .setImage('')
  .setTimestamp()
  .setFooter(`${config.BotName}`, '');

message.channel.send(About);
    }
  });

client.login(config.BotToken);
