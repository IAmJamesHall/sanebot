const { Configuration, OpenAIApi } = require("openai");
const { openAIKey } = require("./config.json");

/**

Create an OpenAI configuration and API object and use it to classify an email header
@async
@function classifyEmail
@param {string} emailHeader - The header of the email to be classified
@returns {Promise<string>} The category name assigned to the email header by the OpenAI model
@throws {Error} If an error occurs during the OpenAI API request
*/
const classifyEmail = async (emailHeader) => {
const configuration = new Configuration({
apiKey: openAIKey,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: `From this email header, categorize it into one of these categories. Only respond with the category name: [spam, personal, urgent notification, unurgent notification, newsletter, promotion]: \n ${emailHeader}`,
max_tokens: 1000,
temperature: 0,
});
return response.data.choices[0].text.replace(/\n/g, '');
};
module.exports = classifyEmail;