
let prms = (url) => new Promise((success, reject) => {
     fetch(url)
        .then(y => { 
            if (y.ok == false) { 
                reject('Error');
            }
            return y.json();
        })
         .then(y => { 
            success(y);
        })
})
   
// API-1

prms("https://jsonplaceholder.typicode.com/posts").then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})


// API-2

prms("https://jsonplaceholder.typicode.com/comments").then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})