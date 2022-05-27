const testaFunc = () =>
console.log("Test a function");

testaFunc();
console.log("print");

const chalk = require('chalk');

const success = chalk.green;
const error = chalk.red.underline;
const warning = chalk.yellow;

console.log(success('Task Done!'));
console.log(error('Something went wrong!'));
console.log(warning('Check your code again!'));

console.log(error('Error occurred!'));