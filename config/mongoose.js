const chalk = require('chalk');
const mongoose = require('mongoose');

main().catch(err => console.log(chalk.red.inverse(err)));

async function main() {
  await mongoose.connect('mongodb+srv://csvfilecheckernodejs-user:csvfilecheckernodejs-user@cluster0.lzeuen4.mongodb.net/cccccc?retryWrites=true&w=majority');
  console.log(chalk.green.inverse("Successfully connected to DataBase."))
}
const db=mongoose.connect;
module.exports=db;