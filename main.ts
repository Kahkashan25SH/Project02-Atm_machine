#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

let myBalance = 10000;
let myPin = 2277;

// wellcome message
console.log(chalk.green("\n \tWELLCOME TO ISLAMIC-BANK ATM MACHINE\n")); 
 
let PinAns = await inquirer.prompt(
    {
        name: "Pin",
        message: chalk.yellow("Enter your pin code"),
        type: "number",
    }
);
if (PinAns.Pin === myPin){
    console.log(chalk.blue("\nlogin Succesfuly\n"));

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: ("select an operation"),
                type: "list",
                choices: ["withdraw", "Fast cash", "Cheak balnce"]
            }
        ]
);
if(operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]
);
if(amountAns.amount <= myBalance){
    let balance = myBalance -amountAns.amount;
        console.log(`your Remaining Balance is ${balance}`);
    }
     else{
            console.log(chalk.red(`you have insufficent balance`));
        }
    }
     else if (operationAns.operation === "Fast cash"){
        let FastcashAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "list",
                    choices:["2000","4000","6000","8000","10000","12000"]
                }
            ]
);
if (FastcashAns.amount <= myBalance) {
    let balance2 = myBalance - FastcashAns.amount;
        console.log(`The Remaining balance is ${balance2}`);
    }
     else{
            console.log(chalk.red(`you have insufficent balance`));
        }   
    }
    else if (operationAns.operation === "cheak balance"){
        console.log(myBalance);
    }
}
else{
    console.log(chalk.red("Incorrect your pin code"));
}