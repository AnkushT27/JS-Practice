/* var x=10;
var x='ABCD';
a();
b(); */


 let x =10
 a();

function a(){
    console.log(this.x);
    let x =10;
   x = x+ 10;
}

function b(){
    x = x+20;
}

//output

//call stack
// x :undefined
// x:100
// local->this,
// local->this
// console


