var needle = require('needle');

const newUserQuery = (request, res) => {
    

    const sessionID = String(request.headers.cookie).split('=')[1];

    needle.get(`http://grupormaker.com/dev/helperson-api/public/toHelp?session=${sessionID}`, function(error, response) {
        
        res.json(response.body);
        
    });

}


module.exports = newUserQuery ;
