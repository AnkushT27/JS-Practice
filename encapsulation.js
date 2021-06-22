

function countincre(){
    var count =0;
  return function x(){
    if(this.count){
      count += this.count;
      console.log( count);
    }
    else{
      count += 1;
      console.log( count);
    }
    
   }
}

let countfunc = countincre()
countfunc();
countfunc();
count = 29
console.log(count)
countfunc();