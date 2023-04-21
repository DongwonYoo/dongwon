const clock = document.querySelector("#clock");


function getClock (){
    const date = new Date();
    //padStart(2,"0") = 桁数が少なくても２桁にならなければ、２桁より少なかったら０をいれる
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seceonds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seceonds}`;

}

getClock();
setInterval(getClock, 1000);