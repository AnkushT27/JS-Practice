statement();

//function statement

function statement(){
    console.log('data')
}

//function expression
let a = function (){
    console.log('data')
}

//anonymous function
let ab = function(param){
    return param
    console.log('data')
}

//named function expression

let abc = function abc(){
    console.log('data')
}


//parameter vs arguments




//first class functions

let param = function(){
    console.log('param')
}
a();
ab(param)();
