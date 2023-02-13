
function sendMessage() {
    const request = require('request');
    request.post("https://discord.com/api/webhooks/1074787815419813898/oGW_IN7LjRSnBw7FDcIaCvaebf1pDB7xp4D72Hfyqs_DTc7z0XeOhv9SMTqFw1ftrkAC", {
        json: { content: "Message" }, function () {console.log('done')}
    });

//     request.setRequestHeader('Content-type', 'application/json');

//     const params = {
//       username: "My Webhook Name",
//       avatar_url: "",
//       content: "The message to send"
//     }

//     request.send(JSON.stringify(params));
//   }
}

  sendMessage();