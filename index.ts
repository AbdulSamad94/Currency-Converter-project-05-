#! /usr/bin/env node


import inquirer from "inquirer";

//taking currency as input to convert from
let currencyFrom = await inquirer.prompt([{
    name : "cFrom",
    type : "list",
    message : "Select the currency you want to convert from :",
    choices : ["Ruppees", "Riyals" , "Pounds" , "Dollars"],
}])


//taking currency as input to convert into
let currencyTo = await inquirer.prompt([{
    name : "cTo",
    type : "list",
    message : "Select the currency you want to convert into :",
    choices : ["Ruppees", "Riyals" , "Pounds" , "Dollars"],
}])


//making easier for us to write code
let from = currencyFrom.cFrom
let to = currencyTo.cTo


//i made it with if else that if anyone select the same currency to convert into it will show this message
if(from == "Ruppees" && to == "Ruppees" ){
    console.log("You can not convert Ruppees into Ruppees, try other currency for the convertion!!!!!!!")
}
else if(from == "Riyals" && to == "Riyals" ){
    console.log("You can not convert Riyals into Riyals, try other currency for the convertion!!!!!!!")
}
else if(from == "Pounds" && to == "Pounds" ){
    console.log("You can not convert Pounds into Pounds, try other currency for the convertion!!!!!!!")
}
else if(from == "Dollars" && to == "Dollars" ){
    console.log("You can not convert Dollars into Dollars, try other currency for the convertion!!!!!!!")
}

else{
    //taking input for the amount to be converted

    let currencyAmount = await inquirer.prompt([{
        name : "cAmount",
        type : "number",
        message : "Enter the amount",
    }])
    
    //making it easier for us to code
    let amount = currencyAmount.cAmount
    

    //from ruppess to every currency
    if(from == "Ruppees" && to == "Riyals" ){
        let amountAnswer = amount / 74.14;
        console.log(`Your Amount From Pakistani Ruppee to Riyal is : ${amountAnswer}`)
    }
    if(from == "Ruppees" && to == "Pounds" ){
        let amountAnswer = amount / 345.82;
        console.log(`Your Amount From Pakistani Ruppee to Pound is : ${amountAnswer}`)
    }
    if(from == "Ruppees" && to == "Dollars" ){
        let amountAnswer = amount / 278.01;
        console.log(`Your Amount From Pakistani Ruppee to Dollar is : ${amountAnswer}`)
    }



    //from riyals to every currency
    if(from == "Riyals" && to == "Ruppees" ){
        let amountAnswer = amount / 0.013;
        console.log(`Your Amount From Riyal to Ruppee is : ${amountAnswer}`)
    }
    if(from == "Riyals" && to == "Pounds" ){
        let amountAnswer = amount / 4.67;
        console.log(`Your Amount From Riyal to Pounds is : ${amountAnswer}`)
    }
    if(from == "Riyals" && to == "Dollars" ){
        let amountAnswer = amount / 3.75;
        console.log(`Your Amount From Riyal to Dollar is : ${amountAnswer}`)
    }


    //from pounds to every currency
    if(from == "Pounds" && to == "Ruppees" ){
        let amountAnswer = amount / 0.0029;
        console.log(`Your Amount From Pounds to Ruppes is : ${amountAnswer}`)
    }
    if(from == "Pounds" && to == "Riyals" ){
        let amountAnswer = amount / 0.21;
        console.log(`Your Amount From Pounds to Riyal is : ${amountAnswer}`)
    }
    if(from == "Pounds" && to == "Dollars" ){
        let amountAnswer = amount / 0.80;
        console.log(`Your Amount From Pounds to Dollar is : ${amountAnswer}`)
    }


    //from dollars to every currency
    if(from == "Dollars" && to == "Ruppees" ){
        let amountAnswer = amount / 0.0036;
        console.log(`Your Amount From Dollar to Ruppes is : ${amountAnswer}`)
    }
    if(from == "Dollars" && to == "Riyals" ){
        let amountAnswer = amount / 0.27;
        console.log(`Your Amount From Dollar to Riyal is : ${amountAnswer}`)
    }
    if(from == "Dollars" && to == "Pounds" ){
        let amountAnswer = amount / 1.24;
        console.log(`Your Amount From Dollar to Pound is : ${amountAnswer}`)
    }

}





