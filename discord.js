const fs = require("node:fs");
const path = require("node:path");
// Require the necessary discord.js classes

module.exports.createClient = async () => {
  const {
    Client,
    Collection,
    Events,
    GatewayIntentBits,
  } = require("discord.js");
  const token = require("./config.json").token;
  // Create a new client instance
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  await client.login(token);
  return client;
};

// // basic logging to the sanebot channel
// module.exports.discordLog = (message, client) => {
//   const { Events } = require('discord.js');
//   // When the client is ready, run this code (only once)
//   // We use 'c' for the event parameter to keep it separate from the already defined 'client'
//   client.once(Events.ClientReady, (c) => {
//     console.log(`Ready! Logged in as ${c.user.tag}`);
//     const sanebotChannel = c.channels.cache.find(
//       (i) => i.name === "sanebot"
//     ).id;
//     c.channels.cache.get(sanebotChannel).send(message);
//   });
// };

// // basic logging to the sanebot channel
// //TODO: rewrite this so it can run multiple times (ex above)
// module.exports.discordLog = (message, client) => {
//   //   const sanebotChannel = client.channels.cache.find(
//   // 	(i) => i.name === "sanebot"
//   //   ).id;
//   // Get the channel by its ID
//   const channel = client.channels.cache.get("1069883537454551100");

//   // Send the message
//   channel.send("Hello there!");
// };

// module.exports.setUpServerCommands = (client) => {
//   const { Collection, Events } = require("discord.js");
//   // pull in commands from ./commands folder
//   client.commands = new Collection();

//   const commandsPath = path.join(__dirname, "commands");
//   const commandFiles = fs
//     .readdirSync(commandsPath)
//     .filter((file) => file.endsWith(".js"));

//   for (const file of commandFiles) {
//     const filePath = path.join(commandsPath, file);
//     const command = require(filePath);
//     // Set a new item in the Collection with the key as the command name and the value as the exported module
//     if ("data" in command && "execute" in command) {
//       client.commands.set(command.data.name, command);
//     } else {
//       console.log(
//         `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
//       );
//     }
//   }

//   //listen for commands, then run the required command
//   client.on(Events.InteractionCreate, async (interaction) => {
//     const command = interaction.client.commands.get(interaction.commandName);

//     if (!command) {
//       console.error(
//         `No command matching ${interaction.commandName} was found.`
//       );
//       return;
//     }

//     try {
//       await command.execute(interaction);
//     } catch (error) {
//       console.error(error);
//       await interaction.reply({
//         content: "There was an error while executing this command!",
//         ephemeral: true,
//       });
//     }
//   });
// };
