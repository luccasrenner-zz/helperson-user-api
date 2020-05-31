var needle = require('needle');

const newAccount = (request, response) => {
    
    console.log(request.body)

    var data = {
        name : request.body.name,
        email : request.body.email,
        password: request.body.password,
        'acount-type': request.body['acount-type']
      }
      
      needle.post(
          'http://grupormaker.com/dev/helperson-api/public/new', 
          data, 
          { multipart: true }, 
          function(err, resp, body) {
                
            let {
                id,
                userStatus,
                userEmail,
                userName,
            } = body;

            response.json(body)
         }
      );


}


module.exports = newAccount ;
