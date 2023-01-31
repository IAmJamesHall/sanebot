const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Clears the current channel"),
  async execute(interaction) {
    let fetched;
    const sanebotChannel = interaction.client.channels.cache.find(
      (i) => i.name === "sanebot"
    );
    do {
      fetched = await sanebotChannel.messages.fetch({ limit: 100 });
      sanebotChannel.bulkDelete(fetched);
    } while (fetched.size >= 2);

    await interaction.reply('Welcome to your clear channel :)');
    await setTimeout(() => {}, 3000); //pause for 3 seconds
    await interaction.deleteReply();
  },
};
