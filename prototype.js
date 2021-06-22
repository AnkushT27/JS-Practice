let obj15 = {
    names:'Mansi',
    greet : function(){
        console.log('abcd',this.names)
    }
}

let obj14 = {
    names:'Ank',
    
}

obj14.__proto__ = obj15

function test() {
    let names = 'MAK'
    console.log('testme')
}

console.log(obj14.greet(),typeof [])

