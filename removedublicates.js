var array = [1,5,6,9,7,5,2,1,2];

//anonymous
var removeDublicates = function(arr){
    let unique = [];
    let found = false;
    if(unique.length == 0){
        unique[0] = arr[0]
    }
    for(let i in arr){
        for(let j in unique){
            if(arr[i]==unique[j]){
                found = true;
            }
        }
        if(!found){
            unique.push(arr[i]);
        }
        found = false;
    }
    return unique;
}

console.log(removeDublicates(array));

//iife
((arr)=>{
    let unique = [];
    let found = false;
    if(unique.length == 0){
        unique[0] = arr[0]
    }
    for(let i in arr){
        for(let j in unique){
            if(arr[i]==unique[j]){
                found = true;
            }
        }
        if(!found){
            unique.push(arr[i]);
        }
        found = false;
    }
    return unique;
})(array)