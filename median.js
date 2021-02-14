var array1 = [1,2,3,5];
var array2 = [4,8,9,11];

//anonymous
var median = function (arr1, arr2){
    let completearr = arr1.concat(arr2);
    let length = completearr.length;
    return (completearr[(length/2)-1]+completearr[length/2])/2;
    
}

console.log(median(array1,array2));

//iife
((arr1,arr2)=>{
    let completearr = arr1.concat(arr2);
    let length = completearr.length;
    return (completearr[(length/2)-1]+completearr[length/2])/2;
})(array1,array2)