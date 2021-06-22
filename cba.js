//call bind & apply are ptototypal methods of Functions
function greet(roll,std){
    console.log(`${this.name} ${this.lastname} from ${std} Roll ${roll}`)
}



//call

let Obj = {
    name : 'Mansi',
    lastname:'kaku'
}

greet.call(Obj,1,10)

//apply

//only 1 change from call does not take args but [args]

greet.apply(Obj,[1,10])


//bind ===> returns a copy of function for that object ,has to be called later

let greetCopy = greet.bind(Obj,1,10)

greetCopy()
