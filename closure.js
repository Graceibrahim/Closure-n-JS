function outer(param1){
function inner(param2){
return param1+param2;
}
return inner;
}
var innerFunc= outer(2);
var result=innerFunc(5);
console.log(result);