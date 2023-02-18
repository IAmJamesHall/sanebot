const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://db.upatree.xyz/api/v1/db/data/noco/p_9r7fowr86onp97/email-addresses/views/email-addresses',
  params: {offset: '0', limit: '25', where: ''},
  headers: {
    'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQGphbWVzaGFsbC54eXoiLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6InVzX3F2dG03MmhobWF1aHhtIiwicm9sZXMiOiJvcmctbGV2ZWwtY3JlYXRvcixzdXBlciIsInRva2VuX3ZlcnNpb24iOiIxOGMwYjNiNGI0Zjk3MWQ2Yjc3Mzc3ODNlZTJiZWJhZmU0NTA4NGRkMmIwZTNmYTMzYjFjMWJiYjE5NTE5ODJjZjdkMDJmOTM3NjgyYjg0NiIsImlhdCI6MTY3NjcwMDM1OCwiZXhwIjoxNjc2NzM2MzU4fQ.xTgNDWeT1QWOCHrati8JeK9iqgdTgRypPMNG7O6Ul8A'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});