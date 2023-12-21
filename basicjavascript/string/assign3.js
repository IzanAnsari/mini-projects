// *************** Conditional Statement **************

// DAy-3 Js

// I-Divisible by 4

// Description

// You are given a number, stored in the variable with the name

// Print yes , if the number is divisible by 4, if not divisible by 4 print no

// Note : A number is divisible by 4, if the result of the following expression number % 4
// Hint : Use %

function divisibleBy4(N) {
    // Write code here
    if (N % 4 == 0)
      console.log('A1=', "yes")
    else
      console.log('A1=', "no")
  
  
  }
  divisibleBy4(8) //yes
  divisibleBy4(12) // yes
  divisibleBy4(18)// no
  // explaination: no because 
  
  // II- EasyWoodCutter 
  // You are given a number stored in the variable with the name N, check if the number is divisble by 3 or not
  // if it is possible print "Yes"
  // if not possible print "No"
  
  // HInt: a number can be divided by 3 if completey divisible by 3 i.e the answer of the operation "n % 3" is zero
  
  function easyWoodCutter(N) {
    // Write code here
    if (N % 3 == 0)
      console.log('A2=', "yes")
    else
      console.log('A2', "no")
  }
  easyWoodCutter(9) //Yes
  easyWoodCutter(8) // No
  easyWoodCutter(318) //Yes
  easyWoodCutter(145) //No
  
  // III- You are given two numbers, scored in variables with the following names
  
  // Australia, England
  
  // If the following expression is true
  
  // Australia > England, print “Australia”
  
  // if the following expression is true
  
  // Australia < England, print "England"
  
  // if the following expression is true
  
  // Australia == England,
  //  print "Tie"
  
  function theAshes(Australia, England) {
    //Write code here
    if (Australia > England) {
      console.log('A3=', "Australia");
    }
  
    else if (Australia < England) {
      console.log('A3=', "England");
    }
    else if (Australia == England) {
      console.log('A3=', "Tie");
    }
  
  }
  theAshes(4, 5) // England
  theAshes(8, 144) //England
  theAshes(20, 20) // Tie
  theAshes(30, 12) // Australia
  
  
  
  // IV - You are given A number, if the number is even print "even" if the number is odd print "odd"
  
  function EvenOrOdd(N) {
    // Write code here
    if (N%2==0) {
      console.log("A4=",'This is even no.')
    }
    else {
      console.log("A4=",'This is odd no.')
    }
  }
  
    EvenOrOdd(5)//odd
    EvenOrOdd(71)//odd
    EvenOrOdd(451)//odd
    EvenOrOdd(48)//even
    EvenOrOdd(86)//even
  // -------------------------------------Till Here ----------------------------------------------------
  
  
  
  
  
  // V-Apply Brakes
  
  // Description
  
  // You are given two numbers stored in the variable with the names
  
  // distance, time
  
  // Find the value of speed, such that,
  
  // speed = distance/time
  
  // If the following expression is true
  
  // speed > 40, print "Apply Brake”
  
  // else
  
  // print "Keep Going”
  
  function applyBrakes(distance, time) {
    //Write code here
  var speed = distance/time
  
  if(speed > 40){
    console.log('A5=','Apply Brake')
  }
  else{
    console.log('A5=','Keep Going')
  }
  }
  
  applyBrakes(40,20)
  applyBrakes(639,1)
  applyBrakes(1290,2)
  
  
  
  
  
  
  
  // VI- You are given two numbers stored in the variables with the following names
  
  //   fuel, distance
  
  // find the value of required such that
  
  //   required =fuel *distance
  
  // if the value of required is greater than 50 print "Enough" if not print "Go On"
  
  function enoughFuelConsumption(fuel, distance) {
      //write code here
    var required = fuel * distance
    if(required > 50){
      console.log('A6=','Enough')
    }
    else if(required < 50){
      console.log('A6=','Go on')
    }
  }
  
  enoughFuelConsumption(30,2)
  enoughFuelConsumption(30,1)
  enoughFuelConsumption(20,3)
  
  
  
  
  // VII-Profile Pic
  
  // Description
  
  // You are given two integers, stored in the variable with the following names
  // Low
  // Also, you are given another two integers, stored in the variable with the following names
  
  // length & width
  
  // Ifthe value stored in length is greater than the value stored in L and the value stored in width, is greater than the value stored in W, print upload
  // Else If the value stored in length is less than the value stored in L, print Increase Length
  
  // Else if the value stored in width, is less than the value stored in W, print Increase width
  
  
  function profilePic(L, W, length, width) {
    //Write code here
    if(length >= L && width >= W){
      console.log('A7=','Upload')
    }  
      // else if(width >= W){
      //   console.log( 'A7=','Upload')
      // }
    else if(length < L){
      console.log('A7=','Increase Length')
    }
    else if(width < W){
      console.log('A7=','Increase Width')
    }
  }
  profilePic(23,34,23,45)
  profilePic(73,34,23,45)
  profilePic(23,94,23,45)
  profilePic(23,0,90,90)
  
  
  
  
  