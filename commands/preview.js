const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('preview')
		.setDescription('Only you can see this!')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('Name of the command to preview')
                .setRequired(true)
                .addChoices(...global.data.getList())
                ),    
	async execute(interaction) {
		await interaction.reply({content: global.data.get(interaction.options.getString('command')), ephemeral: true});
	},
};