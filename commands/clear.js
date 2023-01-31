const { SlashCommandBuilder, SelectMenuInteraction } = require("discord.js");

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

    await interaction.reply('Welcome to your clear channel :)')
    //maybe put a 3-second delay in here, for fun
    await interaction.deleteReply();
  },
};
