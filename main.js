var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://publicapi.traffy.in.th/share/teamchadchart/search',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
