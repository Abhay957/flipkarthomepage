let a = document.body.getElementsByTagName('div')[0];

let di = document.createElement("h1");

di.innerHTML = 'Hello lets check whether its working or not';

// a.prepend(di);
 a.replaceWith(di);