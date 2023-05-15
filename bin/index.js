#!/usr/bin/env node

// npm i -g .
// hello -n me -s orange
const logger = require("./module");

const yargs = require("yargs");
const chalk = require("chalk");
const boxen = require("boxen");
const axios = require("axios");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};

const options = yargs
  .usage("Usage: -n <name>")
  .option("n", {
    alias: "name",
    describe: "Your name",
    type: "string",
    demandOption: true,
  })
  .option("s", {
    alias: "search",
    describe: "Search term",
    type: "string",
  }).argv;

const greeting = chalk.white.bold(`Hello, ${options.name}!`);

const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);

const message = chalk.white.bold("Here's a random joke for you:");
const messageForSearch = chalk.white.bold(
  `Searching for jokes about ${options.search}...`
);

if (options.search) {
  console.log(messageForSearch);
} else {
  console.log(message);
}

// const url = "https://icanhazdadjoke.com/";

// axios.get(url, { headers: { Accept: "application/json" } }).then((res) => {
//   const result = res.data.joke;
//   const boxedRes = boxen(result, boxenOptions);
//   return console.log(boxedRes);
// });

// The url depends on searching or not
const url = options.search
  ? `https://icanhazdadjoke.com/search?term=${escape(options.search)}`
  : "https://icanhazdadjoke.com/";

axios.get(url, { headers: { Accept: "application/json" } }).then((res) => {
  if (options.search) {
    // if searching for jokes, loop over the results
    res.data.results.forEach((j) => {
      const result = "\n" + j.joke;
      const boxedRes = boxen(result, boxenOptions);
      return console.log(boxedRes);
    });
    if (res.data.results.length === 0) {
      const result = "no jokes found :'(";
      const boxedRes = boxen(result, boxenOptions);

      return console.log(boxedRes);
    }
  } else {
    const result = res.data.joke;
    const boxedRes = boxen(result, boxenOptions);
    return console.log(boxedRes);
  }
});

logger.info("info function");
logger.log("log function");

// const chalk = require("chalk");
// const boxen = require("boxen");

// const greeting = chalk.white.bold("Hello!");

// const boxenOptions = {
//   padding: 1,
//   margin: 1,
//   borderStyle: "round",
//   borderColor: "green",
//   backgroundColor: "#555555",
// };
// const msgBox = boxen(greeting, boxenOptions);

// console.log(msgBox);
