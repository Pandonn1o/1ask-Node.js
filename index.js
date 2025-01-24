const dotenv = require('dotenv');
const args = require('minimist')(process.argv.slice(2));

dotenv.config();

let name = args.name;

if (!name) {
  name = process.env.NAME;

  if (!name) {
    name = "unknown user";
  }
}

console.log(`Hello ${name}!`);

if (args.name) {
  console.log("You provided a name through the command-line argument.");
} else if (process.env.NAME) {
  console.log("We got the name from the .env file.");
} else {
  console.log("No name found, using default 'unknown user'.");
}

if (args.notname) {
  console.log("The --notname argument was provided, but it doesn't affect the greeting.");
}

if (args.name && process.env.NAME) {
  console.log("You provided both a name through the command-line argument and .env file.");
}

console.log("Finished processing...");
//npm install minimist
//npm install dotenv