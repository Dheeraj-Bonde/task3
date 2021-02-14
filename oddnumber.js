//anonymous function
var oddnumber = function (a){
    var array = [];
    for(let i=0; i<=a; i++){
        if(i%2 ==! 0)
        {
            array.push(i);
        }
    }
    console.log(array);
}
oddnumber(50);

//iife
(function(a){
    var array = [];
    for(let i=0; i<=a; i++){
        if(i%2 ==! 0)
        {
            array.push(i);
        }
    }
    console.log(array);
})(50)