console.log(x); //undefined
console.log(getName);
// console.log(getName2)
// getName(); //prints the console
// //getName2();//not a function
// console.log(getName2); //acts like a variable for arrow functions
 var x= 20; //if removed gives not defined
function getName(){
    console.log('function exec.')
}

var getName2 = ()=>{
    console.log('function getName2.') 
}



console.log(getName2())
//initially call stack is in global execution contextr and then when a fn is called the local execution stack is pushed into the call stack

 

//undefined!= not defined
//hoisting
//access variables and functions even before it is initialized

//even before the code starts executing,memory is allocated to all variables and functions

//phase1 --> js goes through the program and allocates memory to each variable and functions