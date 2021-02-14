var num = [1,2,3,6,5,4,7,8,9];

//anonymous function
var sumofarr_number = function(a){
    sum = 0;
    for(i in a){
        sum = sum + a[i];
    }
    console.log(sum);
}
sumofarr_number(num);

//iife
(function(a){
    sum = 0;
    for(i in a){
        sum = sum + a[i];
    }
    console.log(sum);
})(num)