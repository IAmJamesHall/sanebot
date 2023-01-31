const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('spam')
		.setDescription('Spams 20 messages to your channel'),
	async execute(interaction) {
		await interaction.reply(`Hi! Here's message #1`);
		for (let i = 2; i <= 20; i++ ) {
			await interaction.followUp(`Hi! Here's message #${i}, bro`);
		}
	},
};