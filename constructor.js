class ABC {
    constructor(){
        this.x = 100;
        this.y = 200
    }

    multiply(){
        return this.x*this.y
    }
}


let a = new ABC();

console.log(a.multiply()) //encapsulation

