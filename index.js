/*
function greet (){
    console.log('hello')
}
//greet()

let name = 'chris';

function greetUser (){
    let name = 'chris'
    alert(`hello ${name}`)
} 
greetUser()
/*

function welcome (name, greet){
      `I said ${greetUser}`
}
welcome(name, greet) 


/*let isRunning = true
    
    function greet () {
    let username = window.prompt(`Enter your username`);
    
    if (username == "")
        console.log(alert('That is not a username'))
        else 
            console.log(alert(`Hello ${username}`))        
    
    }
        console.log('program not running')

isRunning ? greet() : false */

/*
function task1 (taskTwo){
    console.log('Completed task 1');
    taskTwo = task2()

}
function task2 (taskThree){
    console.log('Completed task 2')
    taskThree = task3()

}
function task3 (){
    console.log('Completed all tasks')

}
task1() */ 
/*
let fruits = ['apple', 'banana', 'mango']
let milk = ['oat milk', 'no milk', 'cow milk']

fruits.push('coconut')
fruits.push('watermelon')

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])
let order = console.log(`I want ${fruits[2]} with ${milk[0]} please`)

    function myOrder (){
        alert('Hi welcome to DUNKIN');
        () =>
            prompt('What would you like to drink?')
        
    }
    myOrder()*/






let weather = new Promise ((resolve, reject) => {
    setTimeout(() => 
  //  resolve(), 3000)
      resolve(), 3000)
})

    
  weather
    .then(() => {
        console.log('its a beautiful day')
})
    .catch(() => {
        console.log('its a gloomy day')

})

console.log('whats the weather today?')


/* 
const promise = new Promise ((resolved, rejected) => {
    setTimeout(() => 
        resolved(), 2000)
})

  promise 
    .then(() => {
        console.log('i kept the promise')
    })
    .catch(() => {
        console.log('I did not keep the promise')
    
})
//this worked as intended 😆 
*/

    




