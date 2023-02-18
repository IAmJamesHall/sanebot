const axios = require('axios');
const { discordWebhookURL, token } = require("./config.json");
const { Client, Collection, GatewayIntentBits } = require("discord.js");

/**
 * Posts a message to a Discord channel using a webhook.
 *
 * @param {string} message The message to send to the channel.
 */
function discordLog(message) {
  axios.post(discordWebhookURL, { content: message })
    .then(() => {
      console.log("Message posted to Discord channel");
    })
    .catch((error) => {
      console.error("Error posting message to Discord channel:", error);
    });
}

/**
 * Sets up server commands for a Discord bot.
 */
function setUpServerCommands() {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  // Load commands from the ./commands directory
  const fs = require("fs");
  const path = require("path");
  const commandsPath = path.join(__dirname, "commands");
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

  client.commands = new Collection();
  for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.warn(`Command at ${file} is missing 'data' or 'execute'`);
    }
  }

  client.on("ready", () => {
    console.log(`Discord bot logged in as ${client.user.tag}`);
    const sanebotChannel = client.channels.cache.find(
      (channel) => channel.name === "sanebot"
    );
    if (sanebotChannel) {
      sanebotChannel.send("Discord bot logged in and listening for commands");
    } else {
      console.warn("sanebot channel not found");
    }
  });

  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
      return;
    }

    const command = client.commands.get(interaction.commandName);
    if (!command) {
      console.warn(`Command not found for '${interaction.commandName}'`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`Error executing '${interaction.commandName}':`, error);
      await interaction.reply({
        content: "There was an error while executing this command.",
        ephemeral: true,
      });
    }
  });

  client.login(token);
}

module.exports = { discordLog, setUpServerCommands };
