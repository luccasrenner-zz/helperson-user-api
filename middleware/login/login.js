var needle = require("needle");

const login = (request, response) => {

  var data = {
    email: request.body.email,
    password: request.body.password,
  };

  needle.post(
    "http://grupormaker.com/dev/helperson-api/public/auth",
    data,
    { multipart: true },
    function (err, resp, body) {
      let { session_id, expiration } = body;
            
      response.cookie(
        'session_id', 
        session_id, 
        { expires: new Date(Date.now() + 900000), httpOnly: true }
      );

      response.json(body);

    }
  );
};

module.exports = login;
