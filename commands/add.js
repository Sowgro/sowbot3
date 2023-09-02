const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Add a Command')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('The name of the command `/use THIS`')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('content')
                .setDescription('What the bot will send')
                .setRequired(true)),
	async execute(interaction) {
        if (global.data.getList().length <= 25)
        {
            global.data.add(interaction.options.getString('command'),interaction.options.getString('content'));
            await interaction.reply('Added `'+interaction.options.getString('command')+'`.');
        }
        else
        {
            await interaction.reply('Failed to add command. There is a hard limit of 25 commands!');
        }
	},
};