// function getDataFromServer(callback){
//     fetch("/data").then(function(response){
//         return response.json();
//     }).then(function(user){
//         callback(user);
//     })
// }
// function preprocessBeforeRendering(user,callback){
//     const str = `${user.name}他现在在${user.address}`;
//     callback(str);
// }
// function render(htmlString){
//     document.body.innerHTML = htmlString;
// }

// getDataFromServer(function(user){
//     preprocessBeforeRendering(user,function(htmlString){
//         render(htmlString);
//     })
// })

function getDataFromServer(){
    return fetch("/data").then(function(response){
        return response.json();
    }).then(function(user){
        return user;
    })
}
function preprocessBeforeRendering(user){
    return `${user.name}他现在在${user.address}`;
}
function render(htmlString){
    document.body.innerHTML = htmlString;
}

function getName(){
    return fetch("/name").then(function(response){
        return response.text();
    }).then(function(name){
        return name;
    })
}
//第一种方式
// getDataFromServer()
// .then(function(user){
//     return preprocessBeforeRendering(user);
// }).then(function(htmlString){
//     render(htmlString);
// })

//第二种方式
// Promise.resolve()
// .then(getDataFromServer)
// .then(preprocessBeforeRendering)
// .then(render);

//第二种方式：变形1
// [getDataFromServer,preprocessBeforeRendering,render].reduce((p,fn)=>p.then(fn),Promise.resolve());

//第二种方式：变形2
// const applyAsync = (p,fn) => p.then(fn);
// const compose = (...func) => func.reduce(applyAsync,Promise.resolve());
// compose(getDataFromServer,preprocessBeforeRendering,render);


async function init(){
    const user = await getDataFromServer();
    const htmlString = preprocessBeforeRendering(user);console.log(htmlString);
    render(htmlString);
}
// function init(){
//     const user = getDataFromServer();
//     const htmlString = preprocessBeforeRendering(user);console.log(htmlString);
//     render(htmlString);
// }
init();