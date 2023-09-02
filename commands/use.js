const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('use')
		.setDescription('Use a Command')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('What the bot will send')
                .setRequired(true)
                .addChoices(...global.data.getList())
                ),
	async execute(interaction) {
		await interaction.reply(global.data.get(interaction.options.getString('command')));
	},
};