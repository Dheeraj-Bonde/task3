var num = [1,2,3,6,5,4,7,8,9,1,8,17,19];

//anonymous functioon
var primenumber = function (a){
    let primearray = [];
    let fac = 0;
    
    for(let i in a){
        if(a[i] == 2){
            primearray.push(a[i]);
        }
        else{
            if(a[i]%2 ==! 0){
                for(let j=1; j<=a[i]; j= j+2){
                    if(a[i]%j == 0)
                    {
                        fac++;
                    }
                }
                if(fac==2){
                    primearray.push(a[i]);
                }
                fac = 0;
            }
            
        }
    }
    return primearray;
}
console.log(primenumber(num));

//iife
((a)=>{
    let primearray = [];
    let fac = 0;
    for(let i in a){
        if(a[i] == 2){
            primearray.push(a[i]);
        }
        else{
            if(a[i]%2 ==! 0){
                for(let j=1; j<=a[i]; j= j+2){
                    if(a[i]%j == 0)
                    {
                        fac++;
                    }
                }
                if(fac==2){
                    primearray.push(a[i]);
                }
                fac = 0;
            }
            
        }
    }
    return coonsole.log(primearray);
})(num)