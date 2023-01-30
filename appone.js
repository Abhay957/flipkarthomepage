let messages = [
    "Initailizing the process",
    "Hacking of username and password begins",
    "Getting Username",
    "Accessing the site facebook",
    "Username abhay_957 found on facebook",
    "Fetching data from this username",
    "Proccessing data",
    "Wait for 2 minutes",
    "Ahh we excessed the data",
    "Password has been fetched successfully",
    "Process of fetching password and username completed successfully",
    "Process ends"
]

const sleep = async (sec) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(true);
        },sec*1000)
    })
}

const showMessage = async (messages) => {
    await sleep(2);
    let mod = document.getElementById("mod");
    mod.innerHTML = mod.innerHTML + messages + "<br>";
}

( async () => {
    for(let i=0;i<messages.length;i++){
        await showMessage(messages[i]);
    }
} )() 