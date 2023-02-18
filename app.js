const { createClient, discordLog, setUpServerCommands } = require('./discord');
const classifyEmail = require("./gpt");
const { getTenEmailHeaders } = require('./imap');
const { createAddress } = require('./db');

const { inspect } = require("util"); //used for turning js object to string


setUpServerCommands();




const stuff = async () => {
    const headers = await getTenEmailHeaders();
    for (const header of headers) {
        const classification = await classifyEmail(inspect(header));
        discordLog(`${header.from}, ${classification}`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // add a 1 second delay between messages
    }
};


stuff();