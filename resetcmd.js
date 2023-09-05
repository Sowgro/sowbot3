const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);