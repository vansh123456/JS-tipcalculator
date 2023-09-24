/*
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billinput=document.getElementById("billTotalInput");
const tipinput = document.getElementById("tipInput");
const nospeople = document.getElementById("numberOfPeople");
const perperson = document.getElementById("perPersonTotal")
// Get number of people from number of people div
let numberofpeople = Number(nospeople.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
const bill = Number(billinput.value)
  //.value gives us the amount of number entered in the bilinput
  // get the tip from user & convert it into a percentage (divide by 100)
const tippercentage = Number((tipinput.value) /100);

  

  // get the total tip amount
  const tipamt = bill* tippercentage;
  


  // calculate the total (tip amount + bill)
  const total = tipamt +bill;
  

  // calculate the per person total (total divided by number of people)
  const perpersontotal = total/numberofpeople;
  console.log(perperson)

  // update the perPersonTotal on DOM & show it to user
perperson.innerText = `$${perpersontotal.toFixed(2)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
    numberofpeople+=1;
    

  // update the DOM with the new number of people
  nospeople.innerText = numberofpeople

  // calculate the bill based on the new number of people
  calculateBill();

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if(numberofpeople<=1){
    alert('cant be negative boiii')
    throw 'this is sneaky way of throwing error bhai!'
    return //this basically ends the function there only!
  }

  // decrement the amount of people
  numberofpeople-=1;

  // update the DOM with the new number of people
      nospeople.innerText = numberofpeople;

  // calculate the bill based on the new number of people
  calculateBill();

}