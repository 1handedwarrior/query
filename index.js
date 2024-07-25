/*
function greet (){
    console.log('hello world')
}
greet()


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
//😈🔥welcome to callback hell🔥😈 
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
function task6(callback){
    setTimeout(() => {
        console.log('Task six complete!')
        callback()
    }, 2000)
}
function task7(callback){
    setTimeout(() => {
        console.log('Task seven complete!')
        callback()
    }, 2000)
}
function task8(callback){
    setTimeout(() => {
        console.log('Task eight complete!')
        callback()
    }, 2000)
}
function task9(callback){
    setTimeout(() => {
        console.log('Task nine complete!')
        callback()
    }, 2000)
}
function task10(callback){
    setTimeout(() => {
        console.log('Task ten complete!')
        callback()
    }, 2000)
}
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    task6(() => {
                        task7(() => {
                            task8(() => {
                                task9(() => {
                                    task10(() => {
                                        console.log('All tasks finished✅')
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
*/

let berries = ['strawberry', 'blueberry', 'blackberry']
let snacks = ['granola bar', 'cup of nuts', 'cup of oats']

function drink(callback){
    setTimeout(()=> {
        console.log(`Hi can I have a ${berries[2]} smoothie`)  
    ///    callback()
    }, 3000)
        callback()
}

function snack(){
    setTimeout(() => {
        console.log(`Also a ${snacks[0]}`)
    }, 4000)    
}

//this one still needs some practicing
drink(() => {
    snack()
})


/*
let weather = new Promise ((resolve, reject) => {
    setTimeout(() => 
    //  reject(), 3000)
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
console.log(typeof weather)
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
console.log(typeof myPromise)
*/
/*
let bro = ['whis', 'beerus', 'goku'];

const tiempo = () => {
    setTimeout(() => {
        console.log(`sup ${bro[2]}`)
    }, 0)
}


tiempo()
console.log('this should come before tiempo')
/*
the reason the console.log string comes first even though 
the timeout id is for 0 ms, is the event loop. I think ?

Executing tiempo is the first up in the call stack, but the set
timeout gets placed in the event queue. The console.log string
then gets executed, emptying the call stack. Now once the call
stack is empty, the items placed in the event-queue got executed next  
*/
/*
function washCar(callback){
    setTimeout(() => {
        console.log('I cleaned the s15 🏎️')
        callback()
    }, 3000)
}
function lunch(callback){
    setTimeout(() => {
        console.log('I ate lunch 🥪')
        callback()
    }, 1500)
}
function sleep(){
    setTimeout(() => {
        console.log('I went to sleep 💤')
    }, 1000)
}
washCar(() => {
    lunch(() => {
        sleep();
    });
});
console.log('What will I do today?')

*/
/*
function task1(callback){
    setTimeout(() => {
        console.log('Task 1 complete')
        callback();
    }, 2000)
}
function task2(callback){
    setTimeout(() => {
        console.log('Task 2 complete')
        callback();
    }, 2000)
}
function task3(callback){
    setTimeout(() => {
        console.log('Task 3 complete')
        callback();
    }, 2000)
}
task1(() => {
    task2(() => {
        task3(() => {
            console.log('All tasks complete!')
        })
    })
})
*/

/*
//Note to self resolve/reject with () 
let cat = new Promise((resolved, rejected) => {
    setTimeout(() => {
        resolved()
    }, 2000)
})

    cat
        .then(() => {
            console.log('Nice cat')
        })
        .catch(() => {
            console.log('Mean cat')
        })
*/
/*
let prom = new Promise((resolved, rejected) => {
    setTimeout(() => {                
        rejected()    
    }, 3000)
})

    prom 
        .then(() => {
            console.log('Im going to prom')
        })
       .catch(() => {
             console.log('Im not going to prom') 
        })
*/
/*
fetch('https://pokeapi.co/api/v2/pokemon/charmeleo')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error)
        error = console.error('Whoops error!')


fetch('https://pokeapi.co/api/v2/pokemon/snorla')

    .then(response => {
        if(!response.ok){
            throw new Error ('Error fetching file')
        }
        return(response.json())
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));
*/
/*
//fetch, a promise that returns a response object. 




fetch('https://pokeapi.co/api/v2/pokemon/charizar')
    .then(response => {
        if(!response.ok){
            throw new Error('Whoops error!')
        }
        return (response.json())
    .then(data => console.log(data))        
    .catch(console.error('Whoops error!'))
    })
*/

/*
class person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

console.log(person)
*/