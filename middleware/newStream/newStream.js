var needle = require('needle');

const postList = (request, res) => {
    
    const sessionID = String(request.headers.cookie).split('=')[1];

    const {
        chat_session_id
    } = request.query

    needle.get('http://grupormaker.com/dev/helperson-api/public/streamSession?helper-id='+sessionID+"&session_id="+chat_session_id, function(error, response) {
        
        res.json(response.body);
        
    });

}


module.exports = postList ;
