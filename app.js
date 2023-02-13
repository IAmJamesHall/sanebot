const { createClient, discordLog, setUpServerCommands } = require('./discord');
const classifyEmail = require("./gpt");
const { getTenEmailHeaders } = require('./imap');
const { token } = require('./config.json');


setUpServerCommands();

// discordLog('hello');
// discordLog('hi again');


const stuff = async () => {
    const headers = await getTenEmailHeaders();
    // headers.forEach(async (header) => {
    //     const classification = await classifyEmail(header)
    //     discordLog(`${header}, ${classification}`)
    // });
    console.log(headers);
    // const classification = await classifyEmail(`{
    // date: [ 'Mon, 28 Nov 2022 22:48:18 +0000' ],
    // to: [ 'James Hall <hi@jameshall.xyz>' ],
    // from: [ 'Apex Hosting <support@apexminecrafthosting.com>' ],
    // subject: [ 'Order Confirmation' ]
    // }`);

    // discordLog(`support@apexminecrafthosting.com: ${classification}`)
};

stuff();