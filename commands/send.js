const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('send')
		.setDescription('Send a command')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('Name of the command to send')
                .setRequired(true)
                .addChoices(...global.data.getList())
                ),
	async execute(interaction) {
		await interaction.reply(global.data.get(interaction.options.getString('command')));
	},
};