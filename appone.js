let promise1 = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        resolve(true);
    },5000)
})


let promise2 = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        reject(new Error("I am promise and i am rejected"));
    },5000);
})
promise1.then((value) => {
    console.log(value);
})
promise2.then((value) => {
    console.log(value);
})



































// function loadscript(source,callback){
//     let script = document.createElement("script");
//     script.src = source;
//     document.body.append(script);
//     script.onload = () => {
//         console.log("Script loaded with source " + source);
//         callback(null,source);
//     }
//     script.onerror = () => {
//         console.log("Error loading script");
//         callback(new Error("Failed to load script"),source);
//     }

// }

// loadscript("https://ccdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",(err ,source) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     loadscript("https://ccdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",(err ,source) => {
//         if(err){
//             console.log(err);
//             return;
//         }))
//         loadscript("https://ccdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",)
// });



































// function loadscript(source,callback){
//     let script = document.createElement("script");
//     script.src = source;
//     script.onload = () => {
//         console.log("Hey i am good");
//         callback(source);
//     }
//     document.body.append(script);
// }
// source = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
// const hello = (source) => {
//     alert('Hello script executed' + source);
// }


// loadscript(source,hello);