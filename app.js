const { createClient, discordLog, setUpServerCommands } = require('./discord');
const classifyEmail = require("./gpt");
const { getTenEmailHeaders } = require('./imap');
const { token } = require('./config.json');

const { inspect } = require("util"); //used for turning js object to string


setUpServerCommands();

// discordLog('hello');
// discordLog('hi again');


const stuff = async () => {
    const headers = await getTenEmailHeaders();
    headers.forEach(async (header) => {
        const classification = await classifyEmail(inspect(header))
        const email = 
        discordLog(`${header.from}, ${classification}`)
        console.log(`${header.from}, ${classification}`)
    });
};

stuff();