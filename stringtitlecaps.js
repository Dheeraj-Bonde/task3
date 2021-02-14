//anonymous fuction
var strarray = ['convert','to','upper','caps']
var uppercaps = function(strarray){
    for(let i=0; i<strarray.length; i++){
        strarray[i] = strarray[i][0].toUpperCase() + strarray[i].substr(1);
    }
    console.log(strarray);
}
uppercaps(strarray);

//iife
(function(strarray){
    for(let i=0; i<strarray.length; i++){
        strarray[i] = strarray[i][0].toUpperCase() + strarray[i].substr(1);
    }
    console.log(strarray);
})(strarray)