// function along enclosed with it's laxical scope
function x(){

var a = 100
  function y(){
     
        let b = 600
         function z(){
            console.log(b , a)
        }
        return z
    }
    return y;
}  


let data = x()
console.log(data)
data()()