/* PLAN:
// - [ ] in Inbox, frequently fetch all NEW emails (after the date of the stored latest one) 
//    - categorize and move the email to the correct place. Store the date of the latest on in the db
// - [ ] from SaneLater, occasionally (like every 30 minutes) pull all the emails and check the address on each of them. if any of them are not in the later category of the db, change it to that


What functions do we need?
fetchEmails(flagsToExclude)
changeFolder(email) - make sure to remove flag
applyFlagToEmail
*/





const Imap = require("imap");
const { emailAddress, emailPassword, emailServer } = require("./config.json");

/**
 * Fetches the headers of the 10 most recent emails in the INBOX folder of an IMAP account.
 * 
 * @async
 * @returns {Promise<Array<{ from: string, subject: string }>>} - Promise that resolves to an array of objects containing email headers
 * @throws {Error} - If there was an error connecting to the email account or fetching headers
 */
module.exports.getTenEmailHeaders = () => {
  // Create new instance of Imap object using configuration from config.json
  const imap = new Imap({
    user: emailAddress,
    password: emailPassword,
    host: emailServer,
    port: 993,
    tls: true,
  });

  // Create new Promise that resolves to an array of email headers
  return new Promise((resolve, reject) => {
    const headers = [];

    // Helper function to open the inbox mailbox
    function openInbox(cb) {
      imap.openBox("INBOX", true, cb);
    }

    // When the Imap object is ready, open the inbox mailbox and fetch the headers of the first 10 emails
    imap.once("ready", function () {
      openInbox(function (err, box) {
        if (err) return reject(err);

        const f = imap.seq.fetch("1:10", {
          bodies: "HEADER.FIELDS (FROM TO SUBJECT DATE)",
          struct: true,
        });

        // For each email, parse its header and add it to the headers array
        f.on("message", function (msg, seqno) {
          const prefix = "(#" + seqno + ") ";

          msg.on("body", function (stream, info) {
            let buffer = "";
            stream.on("data", function (chunk) {
              buffer += chunk.toString("utf8");
            });

            stream.once("end", function () {
              const header = Imap.parseHeader(buffer);
              headers.push({ from: header.from, subject: header.subject });
            });
          });
        });

        // When all emails have been processed, resolve the Promise with the headers array and close the connection to the mailbox
        f.once("end", function () {
          imap.end();
          resolve(headers);
        });
      });
    });

    // If there is an error, reject the Promise and close the connection to the mailbox
    imap.once("error", function (err) {
      reject(err);
      imap.end();
    });

    // Connect to the mailbox to start the fetching process
    imap.connect();
  });
}
