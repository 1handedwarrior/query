let count = 0;

document.getElementById('increaseButton').onclick = () => {
    count++;
    document.getElementById('myLabel').innerHTML = count;
}
document.getElementById('resetButton').onclick = () => {
    count = 0;
    document.getElementById('myLabel').innerHTML = count;
}
document.getElementById('increaseButton').onclick = () => {
    count--;
    document.getElementById('myLabel').innerHTML = count;
}