const discordLog = require('./discord');
const classifyEmail = require("./gpt");

const stuff = async () => {
  discordLog(`support@apexminecrafthosting.com: ${
    await classifyEmail(`{
    date: [ 'Mon, 28 Nov 2022 22:48:18 +0000' ],
    to: [ 'James Hall <hi@jameshall.xyz>' ],
    from: [ 'Apex Hosting <support@apexminecrafthosting.com>' ],
    subject: [ 'Order Confirmation' ]
  }`)}`
  );
};

stuff();