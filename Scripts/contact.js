class Contact {
    //private instance members (fields)
    fullName;
    contactNumber;
    emailAddress;
    //public properties
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(contactNumber) {
        this.contactNumber = contactNumber;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
    // constructor
    /**
     * Creates an instance of Contact.
     *
     * @param {string} [fullName="unknown name"]
     * @param {string} [contactNumber="no contact number"]
     * @param {string} [emailAddress="unknown email address"]
     * @memberof Contact
     */
    constructor(fullName = "unknown name", contactNumber = "no contact number", emailAddress = "unknown email address") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    //pulic methods
    /**
     *This methos overrides the built-in toString method for the Contact class
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toString() {
        let outputString = "";
        outputString += `Full Name: ${this.FullName}\n`;
        outputString += `Contact Number: ${this.ContactNumber}\n`;
        outputString += `Email Address: ${this.EmailAddress}`;
        return outputString;
    }
    /**
     *This method converts class Data members to a comma-separated list compatible with JSON
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    toJSON() {
        return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress} `;
    }
    /**
     *This method reads data from a comma-separated list and assigns it to class data member
     *
     * @param {string} data
     * @memberof Contact
     */
    fromJSON(data) {
        this.FullName = data.FullName;
        this.ContactNumber = data.ContactNumber;
        this.EmailAddress = data.EmailAddress;
    }
}
//# sourceMappingURL=contact.js.map