const axios = require("axios");
const { dbURL, dbKey } = require("./config.json");
const headers = {
  "xc-token": dbKey,
};

module.exports.getAllAddresses = () => {
  const options = {
    method: "GET",
    url: dbURL,
    params: { offset: "0", limit: "25", where: "" },
    headers,
  };
  return axios.request(options);
};

module.exports.findOneAddress = (address) => {
  const options = {
    method: "GET",
    url: `${dbURL}/find-one`,
    params: { where: `(email,eq,hi@jameshall.xyz)` },
    headers,
  };
  return axios.request(options);
};

module.exports.createAddress = (addressObj) => {
  const options = {
    method: "POST",
    url: dbURL,
    data: {
      email: "ka@gmail.com",
      title5: "personal",
    },
    headers
  };
  return axios.request(options);
};