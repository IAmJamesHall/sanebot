const { createClient, discordLog, setUpServerCommands } = require('./discord');
const classifyEmail = require("./gpt");
const { token } = require('./config.json');

const client = createClient();
const log = message => {
    console.log(message);
    discordLog(message, client);
}
setUpServerCommands(client);

log('hello');
log('hi');


// const stuff = async () => {
//     const classification = await classifyEmail(`{
//     date: [ 'Mon, 28 Nov 2022 22:48:18 +0000' ],
//     to: [ 'James Hall <hi@jameshall.xyz>' ],
//     from: [ 'Apex Hosting <support@apexminecrafthosting.com>' ],
//     subject: [ 'Order Confirmation' ]
//     }`);
//     log(`support@apexminecrafthosting.com: ${classification}`)
// };

stuff();