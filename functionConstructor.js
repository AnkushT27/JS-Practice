function Test (){
    this.x = 'ABCD'
}


function check(){
    let test = new Test()
    test.static = 'static variable'
    let test2 = new Test()
    console.log(test.x,test.static,test2.static)
}

check();