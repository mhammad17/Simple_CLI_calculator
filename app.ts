#! /user/bin/env node 


import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
    type: "number",
    name: "Number1",
    Massage: "Enter your First Digit"

},
{
    type: "number",
    name: "Number2",
    Massage: "Enter your Second Digit"

},
{
    type: "list",
    name: "Operators",
    Massage: "PLease select Operation",
    choices:["addition", "subtraction", "Multiplication", "Devision" ]

}])


if(answers.Operators === "addition" ){
    let result:number = answers.Number1 + answers.Number2
    console.log("answer", result)
}
if(answers.Operators === "subtraction" ){
    let result:number = answers.Number1 - answers.Number2
    console.log("answer", result)
}
if(answers.Operators === "Multiplication" ){
    let result:number = answers.Number1 * answers.Number2   
    console.log("answer", result)
}
if(answers.Operators === "Devision" ){
    let result:number = answers.Number1 / answers.Number2
    console.log("answer", result)
}