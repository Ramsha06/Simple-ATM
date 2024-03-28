#! /usr/bin/env node 

import inquirer from "inquirer";

 let mypin = "1234";
 let balance = 100000;

 let mypinn = await inquirer.prompt([
  {
    message: "Enter your PIN",
    type: "number",
    name: "pin",
  }
 ]);

 if (mypinn.pin === mypin) 
 {
  console.log("Correct PIN");
 }

 let operations = await inquirer.prompt([
  {
    message: "Enter opertaion",
    type: "list",
    name: "opr",
    choices: ["Withdraw", "Deposit", "Check Balance"],
  }
 ]);

 if (operations.opr === "Withdraw") 
 {
   let wamount = await inquirer.prompt([
    {
      message: "Select your amount",
      type: "list",
      name: "amount",
      choices: ["2000", "5000", "15000", "20000", "Otheramount"],
    }
  ]);
   if (wamount.amount === "2000") 
   {
    balance -= wamount.amount;
    console.log(balance);
   }
   if (wamount.amount === "5000") 
   {
    balance -= wamount.amount;
    console.log(balance);
   }
   if (wamount.amount === "15000") 
  {
    balance -= wamount.amount;
    console.log(balance);
  }
  if (wamount.amount === "20000") 
   {
    balance -= wamount.amount;
    console.log(balance);
   }

    if (wamount.amount === "Otheramount") 
    {
      let otheramount = await inquirer.prompt([
        {
          message: "Enter other amount",
          type: "number",
          name: "oamount",
        }
      ]);
    
      balance -= otheramount.oamount;
      console.log(balance);
    }
    if(wamount.amount > "Otheramount") 
    {
      console.log('Insufficient funds. Please enter a smaller amount.');
    }
  
 }
 if (operations.opr === "Deposit") 
  {
  let depamount = await inquirer.prompt([
    {
      message: "Enter amount you want to deposit",
      type: "number",
      name: "damount",
    }
  ]);
  balance += depamount.damount;
  console.log("Your current amount is " + balance);
  }

  if (operations.opr === "check balance") 
  {
  console.log("Your total balance is" , + balance);
  } 

