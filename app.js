let count = 0;

document.getElementById('btn1').onclick = () => {
    count++;
    document.getElementById('myLabel').innerHTML = count;
}
document.getElementById('btn2').onclick = () => {
    count = 0;
    document.getElementById('myLabel').innerHTML = count;
}
document.getElementById('btn3').onclick = () => {
    count--;
    document.getElementById('myLabel').innerHTML = count;
}