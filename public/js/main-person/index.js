const mainPerson = (
    function(){

        const axios = require("../vendor/axios/axios").default;
        const userAPI = require("../constants/userAPI");


        


        try {

            const helpContainer = document.querySelector('.barra-sesiones--person:not(.barra-sesiones--helper)');

            setInterval( function(){
                //-------------------------------------------------
                    //I've got a sad life :/

                    const {
                        toHelp
                    } = userAPI;

                    axios({
                        method: "get",
                        url: `${toHelp}`,
                    }).then(function (response) {
                          
                        const { 
                            data
                        } = response;

                        const queryList = document.querySelector('.barra-sesiones');
                        queryList.innerHTML = "";
                    


                        const newFeed = function( title, content, ID, USER_CHAT_SESSION ){
            

                            const base = `https://helperson.herokuapp.com/`;
                            const linkToStream = `${base}?my={helper}&FriendUser=${ID}&session=${USER_CHAT_SESSION}9999`
                
                
                            const feedContainer = document.createElement('div');
                            feedContainer.classList.add('feed1-post');
                
                            const feedContainerH3 = document.createElement('h3');
                            feedContainerH3.textContent = title;
                            feedContainer.appendChild(feedContainerH3);
                
                            const contactButton = document.createElement('button');
                            contactButton.classList.add('contactar');
                            contactButton.textContent= "Contactar";
                            contactButton.addEventListener('click', (e) => {
                                const btn = e.target;
                                
                                let HELPERID;
                
                                const {
                                    newStream
                                } = userAPI;
                
                                axios({
                                    method: "get",
                                    url: newStream+'?chat_session_id='+USER_CHAT_SESSION,
                                }).then(function (response) {
                                      
                                    const { 
                                        data
                                    } = response;
                        
                
                                    HELPERID = data['HELPER_ID'];
                
                                    window.open(
                                        linkToStream.replace('{helper}', HELPERID),
                                        '_blank'
                                    );
                             
                                });
                
                               
                            })
                            feedContainer.appendChild(contactButton);
                
                            const linewrap = document.createElement('br');
                            feedContainer.appendChild(linewrap);
                            
                            const postP = document.createElement('p');
                            postP.classList.add('post-p');
                            postP.textContent = content;
                            
                            feedContainer.appendChild(postP);
                            queryList.appendChild( feedContainer );
                            return;
                        }


                        console.log(newFeed('HELPER', '', data.helperList[0], data.ID))














                        
                    });

                //-------------------------------------------------
            }, 5000);

        }catch( e ) { }

        

        const {
            newUserQuery
          } = userAPI;

        const submitButton = document.querySelector('#postDescripcionProblemaUsuario');
        
        try {

        
        submitButton.addEventListener('click', function() {
            
            const text = document.querySelector('#descripcionProblemaUsuario').value

            axios({
                method: "post",
                url: newUserQuery,
                headers: {},
                data: {
                  text: text,
                },
            }).then(function (response) {
                  
                const { 
                    data
                } = response;
                
                console.log(response)

                const {
                    QUERY_STATUS
                } = data
                
                if(QUERY_STATUS) {
                    window.location.reload(1);
                }
            });

        } );

    }catch(e) {  }










    
    //try{
        
            const queryList = document.querySelector('.barra-sesiones:not(.barra-sesiones--person)');
            queryList.innerHTML = "";
        

        const newFeed = function( title, content, ID, USER_CHAT_SESSION ){
            

            const base = `https://helperson.herokuapp.com/`;
            const linkToStream = `${base}?my={helper}&FriendUser=${ID}&session=${USER_CHAT_SESSION}999`


            const feedContainer = document.createElement('div');
            feedContainer.classList.add('feed1-post');

            const feedContainerH3 = document.createElement('h3');
            feedContainerH3.textContent = title;
            feedContainer.appendChild(feedContainerH3);

            const contactButton = document.createElement('button');
            contactButton.classList.add('contactar');
            contactButton.textContent= "Contactar";
            contactButton.addEventListener('click', (e) => {
                const btn = e.target;
                
                let HELPERID;

                const {
                    newStream
                } = userAPI;

                axios({
                    method: "get",
                    url: newStream+'?chat_session_id='+USER_CHAT_SESSION,
                }).then(function (response) {
                      
                    const { 
                        data
                    } = response;
        

                    HELPERID = data['HELPER_ID'];

                    window.open(
                        linkToStream.replace('{helper}', HELPERID),
                        '_blank'
                    );
             
                });

               
            })
            feedContainer.appendChild(contactButton);

            const linewrap = document.createElement('br');
            feedContainer.appendChild(linewrap);
            
            const postP = document.createElement('p');
            postP.classList.add('post-p');
            postP.textContent = content;
            
            feedContainer.appendChild(postP);
            queryList.appendChild( feedContainer );
            return;
        }

        

        fetch('/person_query')
        .then( listTo => listTo.json() )
        .then(
            postList => {
                const keys = Object.keys(postList);
                console.log(postList)
                keys.forEach(element => {
                    const item = postList[element];
                    
                    const {
                        ID,
                        USER_NAME,
                        TITLE,
                        STATUS,
                        USER_CHAT_SESSION                  
                    } = item;

                    
                        newFeed(
                            USER_NAME,
                            TITLE,
                            ID,
                            USER_CHAT_SESSION
                        );
                        
                });
            }
        )
        .catch(e => console.log(e));
        
        
        //}catch(e){}//end catch
    }


    

    
)();

export default mainPerson;
