const abhay = async (hehe) => {
    let options = {
        method:"POST",
        headers:{
        "Content-type":"application/json"
    },
        body: JSON.stringify(hehe)
}
    let f = await fetch("https://jsonplaceholder.typicode.com/posts",options);
    let val = f.json();
    return val;
}

let getr = async (id) => {
    let h = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    let r = await h.json();
    return r;
}

let a = async () => {
    let hehe =
    {
            title: 'Abhay',
            body: 'Hello',
            userId: 1,
    }
    let b = await abhay(hehe);
    console.log(b);
    console.log(await getr(24));
}
a();