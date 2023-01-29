// let p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(1);
//     },11000)
// })

// let p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         // resolve(2);
//         reject(new Error("Error loading this"));
//     },2000)
// })

// let p3 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve(3);
//     },3000)
// })

// p1.then((value) => {
//     console.log(value)
// })

// p2.then((value) => {
//     console.log(value);
// })

// p3.then((value) => {
//     console.log(value);
// })

// let promise_all = Promise.all([p1,p2,p3]);

// promise_all.then((value) => {
//     console.log(value);
// } ).catch((error) => {
//     console.log("Error we are not able to load this page");
//     console.log(error);
// } )


// let promise_allSetteled = Promise.allSettled([p1,p2,p3]);

// promise_allSetteled.then((value) => {
//     console.log(value);
// })


// let promise_race = Promise.race([p1,p2,p3]);

// promise_race.then((value) => {
//     console.log(value);
// })

// let promise_any = Promise.any([p1,p2,p3]);

// promise_any.then((va) => {
//     console.log(va);
// })

// let promise_resolve = Promise.resolve(123);
// promise_resolve.then((val) => {
//     console.log(val);
// })


// let promise_reject = Promise.reject(new Error("We are using reject method from the promise object"));
// promise_reject.then((e) => {
//     console.log(e);
// }).catch((error)=> {
//     console.log(error);
// })

async function abhay(){
    let delhiWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("27deg");
        },2000)
    })
    let banWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("21deg");
        },5000)
    })
    // delhiWeather.then(alert);
    // banWeather.then(alert);
    console.log("Fetching delhi weather");
    let delhiW = await delhiWeather;
    console.log("Delhi weather has been fetched");
    console.log("Fetching bangalore weather");
    let bangW = await banWeather;
    console.log("Bangalore weather has been fetched");
    return [delhiW,bangW]
}
// abhay();
const cherry = async () => {
    console.log("I will get executed when on time execution lines of the abhay will be executed ")
}
const wait = async () => {
    let a = await abhay();
    console.log("Cherry will be executed after abhay has completed its execution 100%");
    let b = await cherry();
    console.log(b);
    // a.then((value) => {
    //    console.log(value);
    // })
}

wait();



