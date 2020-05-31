var needle = require('needle');

const newUserQuery = (request, res) => {
    

    const sessionID = String(request.headers.cookie).split('=')[1];


    var data = {
      text : request.body.text,
        session_id : sessionID
      }
      console.log(data)
      
      needle.post(
          'http://grupormaker.com/dev/helperson-api/public/new_person_query', 
          data, 
          { multipart: true }, 
          function(err, resp, body) {
            
            res.json(body)
         }
      );
}


module.exports = newUserQuery ;
