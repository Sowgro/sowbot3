const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('remove')
		.setDescription('Remove a Command')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('Name of the command to remove')
                .setRequired(true)
                .setChoices(...global.data.getList())
                ),    
	async execute(interaction) {
        global.data.remove(interaction.options.getString('command'))
		await interaction.reply('Removed `'+interaction.options.getString('command')+'`.');
	},
};