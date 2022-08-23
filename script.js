var result = document.querySelector(".inner-screen")
var keyOne = document.querySelector(".key-one")
var empty = "" 
function oneKey() {
    if (result.innerHTML === "") {
        result.innerHTML = empty + "1";    
    }else(result.innerHTML = result.innerHTML + "1")
    
}
function twoKey() {
    result.innerHTML = result.innerHTML + "2";
}
function threeKey() {
    result.innerHTML = result.innerHTML + "3";
}
function fourKey() {
    result.innerHTML = result.innerHTML + "4";
}
function fiveKey() {
    result.innerHTML = result.innerHTML + "5";
}
function sixKey() {
    result.innerHTML = result.innerHTML + "6";
}
function sevenKey() {
    result.innerHTML = result.innerHTML + "7";
}
function eightKey() {
    result.innerHTML = result.innerHTML + "8";
}
function nineKey() {
    result.innerHTML = result.innerHTML + "9";
}
function zeroKey() {
    result.innerHTML = result.innerHTML + "0";
}
function clearKey() {
    result.innerHTML = empty;
}
function dotKey() {
    result.innerHTML = result.innerHTML + ".";
}
function delKey() {
    result.innerHTML = result.innerHTML + "0";
}
function addKey() {
    result.innerHTML = result.innerHTML + "+";
}
function subKey() {
    result.innerHTML = result.innerHTML + "-";
}
function multKey() {
    result.innerHTML = result.innerHTML + "*";
}
function divideKey() {
    result.innerHTML = result.innerHTML + "/";
}
function delKey() {
    result.innerHTML = result.innerHTML.toString().slice(0,-1);
}
function eqlKey() {
    result.innerHTML = eval(result.innerHTML);
}
