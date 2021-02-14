var array = ['deed','madam','fdsfds'];

//anomymous function
var palindrome = function (arr){
    var reverse = [];
    for(let i in arr){
        let a = [];
        b = arr[i].split('');
        for(let j=arr[i].length; j>=0; j--){
            a[arr[i].length-j] = b[j];
        }
        if(arr[i]== a.join('')){
            reverse.push(arr[i]);
        }
    }
    console.log(reverse);
}

palindrome(array);

//iife
((arr)=>{
    var reverse = [];
    for(let i in arr){
        let a = [];
        b = arr[i].split('');
        for(let j=arr[i].length; j>=0; j--){
            a[arr[i].length-j] = b[j];
        }
        if(arr[i]== a.join('')){
            reverse.push(arr[i]);
        }
    }
    console.log(reverse);
})(array)