var needle = require('needle');

const postList = (request, res) => {
    

    needle.get('http://grupormaker.com/dev/helperson-api/public/new_person_query', function(error, response) {
        
            res.json(response.body);
        
    });

}


module.exports = postList ;
