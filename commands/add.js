const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('add')
		.setDescription('Add a command')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name of the command `/send THIS`')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('content')
                .setDescription('What the bot will send')
                .setRequired(true)),
	async execute(interaction) {
        if (global.data.getList().length <= 25)
        {
            global.data.add(interaction.options.getString('name'),interaction.options.getString('content'));
            await interaction.reply('Added `'+interaction.options.getString('name')+'`.');
        }
        else
        {
            await interaction.reply('Failed to add command. There is a hard limit of 25 commands!');
        }
	},
};