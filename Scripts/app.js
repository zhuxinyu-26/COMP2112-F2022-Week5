"use strict";
//IIFE -- Immediately Invoked Function Expression
//AKA - Self Executing Function
(function () {
    /**
     *This function loads data Asynchronously from a url.
     *It calls the calback function when the data loading is complete
     * @param {string} method
     * @param {string} url
     * @param {function} callback
     */
    function LoadData(method, url, callback) {
        //STEP1 - create an empty XHR object
        let XHR = new XMLHttpRequest();
        //STEP2 - Compose the Request
        XHR.open(method, url);
        //STEP3 - Send the Request to the server
        XHR.send();
        //STEP4 - Set up an event listener
        XHR.addEventListener("readystatechange", function () {
            if (XHR.status == 200 && XHR.readyState == 4) {
                // console.log(XHR.responseText);
                // let contactDataSource = JSON.parse(XHR.responseText);
                // console.log(contactDataSource.ContactList[0]);
                callback(XHR.responseText);
            }
        });
    }
    //WEEK3 - first method using FUNCTION
    function Start() {
        console.log("App Started!");
        // LoadData("GET", "./Data/contacts.json", function (XHR) {
        //   console.log(XHR);
        // });
        $.getJSON("./Data/contacts.json", function (DataSource) {
            console.log(DataSource.ContactList[0]);
        });
    }
    // WEEK3 - second method using function
    // let Start = function () {
    //   console.log("App Started!");
    // };
    //WEEK3 - third method using function
    // let Start = () => {
    //   console.log("App Started!");
    // };
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map