"use strict";
//IIFE -- Immediately Invoked Function Expression
//AKA - Self Executing Function
(function () {
  /**
   *This method saves our data to localStorage
   *
   * @param {any[]} contactList
   */
  function SaveContactListData(contactList: any[]):void{
    let count = 0;
    for (const contact of contactList) {
      let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
      // console.log(newContact.toString());
      localStorage.setItem(count.toString(), newContact.toJSON());
      count++;
    }
  }
/**
 *This method reads our data from localStorage and returns a Contact Array
 *
 * @return {*}  {Contact[]}
 */
function LoadContactListData(): Contact[]{
  //create an empty Contact Array Container
  let ContactArray = new Array<Contact>();
  let keys = Object.keys(localStorage);
  for(let key of keys)
  {
    let newContact = new Contact();
    newContact.fromJSON(localStorage.getItem(key));
    ContactArray.push(newContact);
  }
  return ContactArray;
}
function LoadHeader(): void{
  $.get("./Views/components/header.html", function(html_data){
    $("header").html(html_data);
    // document.getElementsByTagName("a");
    /* let navLinks = document.querySelector("li>a.nav-link");
    for (const link of navLinks as HTMLAnchorElement) {
      console.log(link.href);
    } */

    switch (document.title)
    {
      case "Home":
        $("#homePage").addClass("active");
        break;
        case "About Us":
        $("#aboutPage").addClass("active");
        break;
        case "Our Projects":
        $("#projectsPage").addClass("active");
        break;
        case "Our Services":
        $("#servicesPage").addClass("active");
        break;
        case "Contact Us":
        $("#contactPage").addClass("active");
        break;
    }  

  });
}

function LoadFooter(): void{
  $.get("./Views/components/footer.html", function(html_data){
    $("footer").html(html_data);
  });
}
  function Start() {

    console.log("App Started!");
    
    LoadHeader();
    
  }

  window.addEventListener("load", Start);
})();
