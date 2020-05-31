const login = (() => {
  const axios = require("../vendor/axios/axios").default;
  const userAPI = require("../constants/userAPI");

  const {
       login
     } = userAPI;

  const submitForm = document.querySelector("#login-submit");

  if (submitForm !== null) {
    submitForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitData();
      return false;
    });
  }

  function submitData() {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    axios({
      method: "post",
      url: login,
      headers: {},
      data: {
        email: email,
        password: password,
      },
    }).then(function (response) {
        
        const { 
            data
        } = response;

        const { 
            session_id,
            account_type
        } = data;


      if ( account_type == "helper" ) { 
        window.location.assign("/main-helper")
      }else if( account_type == "person" ) {
        window.location.assign("/main-person");
      } else {
          return;
      }

    });
  }
})();

export default login;
