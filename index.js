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


function welcome (){
    let name = 'bryan';
    alert(`I meant ${name}`)
}
welcome() 
*/
/*
let isRunning = true;
    
    function greet () {
    let username = window.prompt(`Enter your username`);
    
    if (username == "")
        console.log(alert('That is not a username'))
        else 
            console.log(alert(`Hello ${username}`))        
    
    }

greet()
isRunning ? console.log('Program running') : console.log('Program not running');
*/
//can seem to use this callback, back to yt 

/*
😈🔥welcome to callback hell🔥😈 
function task1(callback){
    setTimeout(() => {
        console.log('Task one complete!')
        callback();
    }, 2000)
}
function task2(callback){
    setTimeout(() => {
        console.log('Task two complete!')
        callback();
    }, 2000)
}
function task3(callback){
    setTimeout(() => {
        console.log('Task three complete!')
        callback();
    }, 2000)
}
function task4(callback){
    setTimeout(() => {
        console.log('Task four complete!')
        callback();
    }, 2000)
}
function task5(callback){
    setTimeout(() => {
        console.log('Task five complete!')
        callback();
    }, 2000)
}
function task6(){
    setTimeout(() => {
        console.log('Task six complete!')
    }, 2000)
}
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6();
                });
            });
        });
    });
});
*/
/*
function one(callback){
    setTimeout(() => {
        console.log('I log 1 after 1 second')
        callback();
    }, 1000)
}
function two(callback){
    setTimeout(() => {
        console.log('I log 2 after 2 second')
        callback();
    }, 2000)
}
function three(callback){
    setTimeout(() => {
        console.log('I log 3 after 3 second')
        callback();
    }, 3000)
}
function four(){
    setTimeout(() => {
        console.log('I log 4 after 4 second')
    }, 4000)
}
one(() => {
    two(() => {
        three(() => {
            four();
        });
    });
});
*/
/*
let berries = ['strawberry', 'blueberry', 'blackberry']
let snacks = ['granola bar', 'cup of nuts', 'cup of oats']

function drink(callback){
    setTimeout(()=> {
        console.log(`Hi can I have a ${berries[2]} smoothie`)  
    }, 3000)
    setTimeout(() => {
        callback()
    }, 4000)
}

function snack(){
    setTimeout(() => {
        console.log(`Also a ${snacks[0]}`)
    }, 4000)    
}

//this one still needs some practicing
drink(snack)
*/

/*
let weather = new Promise ((resolve, reject) => {
    setTimeout(() => 
      reject(), 3000)
    //  resolve(), 3000)
})

    
  weather
    .then(() => {
        console.log('its a beautiful day')
})
    .catch(() => {
        console.log('its a gloomy day')

})

console.log('whats the weather today?')
*/
/*
const promise = new Promise ((resolved, rejected) => {
    setTimeout(() => 
        rejected(), 2000)
})

  promise 
    .then(() => {
        console.log('i kept the promise')
    })
    .catch(() => {
        console.log('I did not keep the promise')
    
})
*/
/*
const myPromise = new Promise ((resolve, reject) => {
        console.log('What will I do today ?')
        setTimeout(() => {
            reject()
        }, 2000)
})
try{
myPromise 
  
    .then(() => {
        console.log('Its sunny, ill take the Z out')
    })
    .catch(() => {
        console.log('Its rainy, ill stay inside')
    })
}
catch{
    console.error('Whoops something went wrong')
}
*/
/*
function greet (){
    setTimeout(() =>
    console.log('greetings bruv'), 3000)
    }

greet()
*/
/*
function timer (){
    setTimeout(() => {
        console.log('I made this timer boi')}, 3000)
    
}

timer()
// just getting the feel for setting timeouts

*/
/*
let guy = window.prompt('whats your name?');
function timer(){
    setTimeout(() => {
        console.log(`sup ${guy}`)}, 2000)
    }

timer()
*/
/*
let bro = 'Chris';

const tiempo = () => {
    setTimeout(() => {
        console.log(`sup ${bro}`)
    }, 0)
}


tiempo()
console.log('this should come before tiempo')
*/
/* 
the reason the console.log string comes first even though 
the timeout id is for 0 ms, is the event loop. I think ?

Executing tiempo is the first up in the call stack, but the set
timeout gets placed in the event queue. The console.log string
then gets executed, emptying the call stack. Now once the call
stack is empty, the items placed in the event-queue got executed next  
*/
/*
function task1(callback){
    setTimeout(() => {
        console.log('Youve taken out the trash 🗑️')
        callback();
    }, 1000)
} 
function task2(callback){
    setTimeout(() => {
        console.log('Youve cleaned the dishes 🍽️')
        callback();
    }, 3000)
} 
function task3(){
    setTimeout(() => {
        console.log('Youve completed all tasks ✅')
    }, 500)
} 
task1(() => {
    task2(() => {
        task3();
    });
});
*/