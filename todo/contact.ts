import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

interface Contact {
    id: number,
    name: string,
    phone_number: string,
}


let contacts: Contact[]=[];

function addContact(name:string, phone_number:string): void{
    const contact: Contact={id: contacts.length, name, phone_number};
    contacts.push(contact);
    console.log("Contact Added");
    
}

function viewContact(): void{
    contacts.forEach((contact)=>{
        console.log(`${contact.id + 1}. ${contact.name} - ${contact.phone_number}`);
    });
}

function searchContact(name: string): void{
    const contact = contacts.find((p)=>p.name === name);
    if (contact){
        console.log("Contact Found \n");
        console.log(`${contact.id} ${contact.name} ${contact.phone_number}`);
    }else{
        console.log("Contact not found");
    }

}

function deleteContact(name: string): void{
    let index = contacts.findIndex(p=>p.name === name);

    if(index !== -1){
        contacts.splice(index, 1);
        console.log("Contact Deleted");
    }else{
        console.log("Contact not found please confirm input");
    }
    

}

function main(){
    console.log("#########################################");
    console.log("\n 1. Add Contact");
    console.log("\n 2. View all Contacts");
    console.log("\n 3. Search for Contact");
    console.log("\n 4. Delete Contact");
    console.log("\n 5. Exit");
    rl.question("\n Choose any option above: ", (choice)=>{
        if(choice === "1"){
            var contact_name = "";
            var contact_number = "";

        
            rl.question("\n Enter name: ",(name)=>{
                    rl.question("\n Enter Phone: ", (contact)=>{
                        contact_name = name;
                        contact_number = contact;
                        addContact(contact_name, contact_number);
                        main();

                    })


                })
            
        } else if(choice === "2"){
            viewContact();
            main();
        } else if (choice === "3"){
            rl.question("\n Enter name to search for: ", (name)=>{
                searchContact(name);
                main();
            });
        }else if (choice === "4"){
            rl.question("\n Enter name to delete contact: ", (name)=>{
                deleteContact(name);
                main();
            });
        }else if (choice === "5"){
            console.log("Goodbye");
            rl.close();
            
        }
        
        
        else{
            console.log("Invalid Input");
        }
    })

}

main();