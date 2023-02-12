const { Configuration, OpenAIApi } = require("openai");
const { openAIKey } = require("./config.json");

const configuration = new Configuration({
  apiKey: openAIKey,
});
const openai = new OpenAIApi(configuration);
const classifyEmail = async (emailHeader) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `From this email header, categorize it into one of these categories. Only respond with the category name: [spam, personal, urgent notification, unurgent notification, newsletter, promotion]: \n ${emailHeader}`,
    max_tokens: 1000,
    temperature: 0,
  });
  return response.data.choices[0].text.replace(/\n/g, '');
};

module.exports = classifyEmail;