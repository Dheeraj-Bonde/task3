var array = [1,5,8,9,6,5,7,8,45,9,8,598,7,9,5];

//anonymous
var rotatedarray = function(arr,k){
    let rotatedArrray = arr;
    let a = 0;
    
    for(let i=1; i<=k; i++ ){
        for(let j=0; j<rotatedArrray.length; j++){
            if(j===0){
                a = rotatedArrray[j];
            }
            else{
                rotatedArrray[j-1] = rotatedArrray[j];
                rotatedArrray[j] = a;
            }
        }
        
    }
    return rotatedArrray;
}

console.log(rotatedarray(array,1));


//iife
((arr,k)=>{
    let rotatedArrray = arr;
    let a = 0;
    
    for(let i=1; i<=k; i++ ){
        for(let j=0; j<rotatedArrray.length; j++){
            if(j===0){
                a = rotatedArrray[j];
            }
            else{
                rotatedArrray[j-1] = rotatedArrray[j];
                rotatedArrray[j] = a;
            }
        }
        
    }
    return rotatedArrray;
})(array,2)

