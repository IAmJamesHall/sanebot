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
    await setTimeout(async (interaction) => {}, 3000); //this line appears to do nothing. idk why. it's supposed to pause 3 seconds
    await interaction.deleteReply();
  },
};
