"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function 
(function () {
    let baseSiteURL = "https://georgiancollege.github.io/COMP2112-F2022-LiveSite/";
    /**
     * This method saves our data to localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList) {
        let count = 0;
        for (const contact of contactList) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }
    /**
     * This method reads our data from localStorage and returns a Contact Array
     *
     * @returns {Contact[]}
     */
    function LoadContactListData() {
        // create an empty Contact Array Container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    /**
     * This method loads the Header and the Page Content
     *
     */
    function LoadHeader() {
        console.log("Loading Header...");
        $.get(baseSiteURL + "/Views/components/header.html", function (html_data) {
            $("header").html(html_data);
            // Activate the Home Link on initial load
            $("li>a#Home").addClass("active");
            $("li>a").on("click", function (event) {
                event.preventDefault();
                // Change Title
                document.title = $(this).prop("id");
                // Change URL
                history.pushState({}, "", "/" + document.title);
                // removes the active class from each list item
                $("li>a").each(function () {
                    $(this).removeClass("active");
                });
                // Activate the current Link
                $("li>a#" + document.title).addClass("active");
                LoadContent();
            });
        });
    }
    /**
     * This method injects the Page Content
     */
    function LoadContent() {
        console.log("Loading Content...");
        let contentLink = document.title.toLowerCase();
        $.get(baseSiteURL + "/Views/content/" + contentLink + ".html", function (html_data) {
            $("main").html(html_data);
        });
    }
    /**
     * This method loads and injects the footer content
     *
     */
    function LoadFooter() {
        console.log("Loading Footer...");
        $.get(baseSiteURL + "/Views/components/footer.html", function (html_data) {
            $("footer").html(html_data);
        });
    }
    // First method of using functions
    function Start() {
        console.log("App Started!");
        // initial load
        document.title = "Home";
        // Change URL
        history.pushState({}, "", "/Home");
        LoadContent();
        LoadHeader();
        LoadFooter();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map