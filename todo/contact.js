"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var contacts = [];
function addContact(name, phone_number) {
    var contact = { id: contacts.length, name: name, phone_number: phone_number };
    contacts.push(contact);
    console.log("Contact Added");
}
function viewContact() {
    contacts.forEach(function (contact) {
        console.log("".concat(contact.id + 1, ". ").concat(contact.name, " - ").concat(contact.phone_number));
    });
}
function searchContact(name) {
    var contact = contacts.find(function (p) { return p.name === name; });
    if (contact) {
        console.log("Contact Found \n");
        console.log("".concat(contact.id, " ").concat(contact.name, " ").concat(contact.phone_number));
    }
    else {
        console.log("Contact not found");
    }
}
function deleteContact(name) {
    var index = contacts.findIndex(function (p) { return p.name === name; });
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Contact Deleted");
    }
    else {
        console.log("Contact not found please confirm input");
    }
}
function main() {
    console.log("#########################################");
    console.log("\n 1. Add Contact");
    console.log("\n 2. View all Contacts");
    console.log("\n 3. Search for Contact");
    console.log("\n 4. Delete Contact");
    console.log("\n 5. Exit");
    rl.question("\n Choose any option above: ", function (choice) {
        if (choice === "1") {
            var contact_name = "";
            var contact_number = "";
            rl.question("\n Enter name: ", function (name) {
                rl.question("\n Enter Phone Number: ", function (contact) {
                    contact_name = name;
                    contact_number = contact;
                    addContact(contact_name, contact_number);
                    main();
                });
            });
        }
        else if (choice === "2") {
            viewContact();
            main();
        }
        else if (choice === "3") {
            rl.question("\n Enter name to search for: ", function (name) {
                searchContact(name);
                main();
            });
        }
        else if (choice === "4") {
            rl.question("\n Enter name to delete contact: ", function (name) {
                deleteContact(name);
                main();
            });
        }
        else if (choice === "5") {
            console.log("Goodbye");
            rl.close();
        }
        else {
            console.log("Invalid Input");
        }
    });
}
main();
