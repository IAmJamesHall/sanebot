const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Clears the current channel"),
  async execute(interaction) {
    const channel = interaction.channel;

    try {
      const messages = await channel.messages.fetch({ limit: 100 });
      await channel.bulkDelete(messages);
      await interaction.reply("Channel cleared!");
      setTimeout(() => {
        interaction.deleteReply();
      }, 3000);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "Error clearing channel.",
        ephemeral: true,
      });
    }
  },
};