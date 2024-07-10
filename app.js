let count = 0;

document.querySelector("#btn1").onclick = function(){
    count++;
    document.querySelector("#myLabel").innerHTML = count;
}
document.querySelector("#btn2").onclick = function(){
    count = 0;
    document.querySelector("#myLabel").innerHTML = count;
}
document.querySelector("#btn3").onclick = function(){
    count--;
    document.querySelector("#myLabel").innerHTML = count;
}