const newAccount = (() => {
  const axios = require("../vendor/axios/axios").default;
  const userAPI = require("../constants/userAPI");

  const submitForm = document.querySelector("#newaccount-submit");

  if (submitForm != null) {
    submitForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitData();
      return false;
    });
  }
  const getQueryParams = ( params, url ) => {
  
    let href = location.href;
    //this expression is to get the query strings
    let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  };

  function submitData() {
    const name = document.querySelector("#newaccount-name").value;
    const email = document.querySelector("#newaccount-email").value;
    const password = document.querySelector("#newaccount-password").value;
    const accountType = getQueryParams('acount-type');


    axios({
      method: "post",
      url: userAPI.newUser,
      headers: {},
      data: {
        name: name,
        email: email,
        password: password,
        'acount-type' : accountType
      },
    }).then(function (response) {
      const { data } = response;
      const { userStatus } = data;

      if (userStatus === "newUser") {
        window.location.assign("/login");
      }
    });
  }
})();

export default newAccount;
