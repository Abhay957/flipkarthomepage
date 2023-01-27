
let clock = () => {
    let a = new Date();
    let d = a.getDate();
    let mon = a.getMonth();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let clk = document.getElementById("clock");
    let time = document.getElementById("time");
    clk.innerHTML= `<span class="d">Date:</span> ${d}`;
    time.innerHTML = `<span class="t" >Time:</span> ${h}:${m}:${s}`;
}

setInterval(clock,2000);