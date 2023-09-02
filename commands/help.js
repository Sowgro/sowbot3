const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows the manual'),
	async execute(interaction) {
		await interaction.reply({content: fs.readFileSync('help.md', 'utf-8'), ephemeral: true});
	},
};