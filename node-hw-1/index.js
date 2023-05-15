const { Command } = require("commander");
const program = new Command();
const contacts = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");
program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.table(allContacts);

      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);

      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "lkjl lkjkhgg",
//   email: "oiuirt.ante@vestibul.co.uk",
//   phone: "(992) 987-34492",
// });
// invokeAction({ action: "remove", id: "BlTki3OhD3iIwHIxUn5l6" });

// Буде відслідков, яку дію хочемо зробити і викликати відповід метод з букс
// invokeAction(argv);

// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// // TODO: рефакторить
// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);

// const fs = require("fs/promises");

// const contactsPath = "./db/contacts.json";
// // (для скаладання шляху треба використ модулы метода пас ще не вчили)

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath, "utf-8");
//   console.log("data :>> ", data);
// };

// // listContacts();

// // async function getContactById(contactId) {
// //   const data = await fs.readFile(
// //     `./db/contacts/qdggE76Jtbfd9eWJHrssH.json`,
// //     "utf-8"
// //   );
// //   console.log("data :>> ", data);
// // }

// // getContactById();

// // function removeContact(contactId) {
// //   // ...твій код
// // }

// async function addContact(name, email, phone) {
//   try {
//     // Read the existing contacts data from the file
//     const data = await fs.readFile(contactsPath, "utf-8");
//     const contacts = JSON.parse(data);

//     // Add the new contact to the contacts object
//     const newContact = { name, email, phone };
//     contacts.push(newContact);

//     // Write the updated contacts object back to the file
//     await fs.writeFile(contactsPath, JSON.stringify(contacts));

//     console.log(`Contact added: ${JSON.stringify(newContact)}`);
//   } catch (error) {
//     console.error(`Failed to add contact: ${error.message}`);
//   }
// }

// // addContact("Hanna", "hanna@klk.kj", "394587495");

// // вынести вызов этой фкции в тот файл,за которым не следит нодемон
// // и перекачать джсон контактов
