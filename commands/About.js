const Discord = require("discord.js");
const config = require('../config.json');

module.exports = {
	name: 'about',
	description: 'About me!',
	execute(message, args, client) {
		const About = new Discord.MessageEmbed()
            .setTitle(config.About.title)
            .setDescription(config.About.desc)
        message.channel.send({ embeds: [About] });
	},
};