const axios = require("axios");
const { dbURL, dbKey } = require("./config.json");
const headers = {
  "xc-token": dbKey,
};

/**

Returns all email addresses stored in a remote database.
@async
@function
@returns {Promise<AxiosResponse>} A promise that resolves to an axios response object.
*/
module.exports.getAllAddresses = () => {
  const options = {
    method: "GET",
    url: dbURL,
    params: { offset: "0", limit: "25", where: "" },
    headers,
  };
  return axios.request(options);
};

/**
 * Find one address in the database
 * @param {string} address - Email address to find
 * @returns {Promise} - Promise representing the HTTP request
 */
module.exports.findOneAddress = (address) => {
  const options = {
    method: "GET",
    url: `${dbURL}/find-one`,
    params: { where: `(email,eq,hi@jameshall.xyz)` },
    headers,
  };
  return axios.request(options);
};

/**
 * Create a new email address in the database.
 * 
 * @param {Object} addressObj - An object containing information for the new email address.
 * @param {string} addressObj.email - The email address to create.
 * @param {string} addressObj.category - The category for the email address.
 * @returns {Promise} A promise that resolves with the response data if the address was created successfully, or rejects with an error if the request failed.
 */
module.exports.createAddress = (addressObj) => {
  const options = {
    method: "POST",
    url: dbURL,
    data: addressObj,
    headers
  };
  return axios.request(options);
};