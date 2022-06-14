// function handleRequest (req, res) {
//   res.status(200).send('Welcome to New World!')
// }

// module.exports = handleRequest


var request = require('request');
var options = {
    'method': 'GET',
    'url': 'https://publicapi.traffy.in.th/share/teamchadchart/geojson',
    'headers': {
    }
};
function handleRequest (req, res) {
    request(options, function (error, response) {
        if (error) throw new Error(error);
        //   console.log(response.body);
        res.status(200).send(response.body)
    });
}
module.exports = handleRequest

