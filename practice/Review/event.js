const hello =document.querySelector("#hello");

console.log(hello)

function handleTitleClick(){
    hello.style.color ="blue";
}

function handleMoustEnter(){
    console.log("Mouse is here!")
    hello.innerText = " Mouse is here";
}

function handleMouseLeave(){
    console.log("Mouse is gone");
    hello.innerText = "Mouse is gone"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "blue";
}

function handleWindowCopy(){
    alert("Stop Copy");
}

function handleWindowOffline(){
    alert("NO Internet");

}

function handleWindowOnline(){
    alert("YeeeeeeeeeeS")
}

hello.onclick = handleTitleClick;
hello.onmouseenter = handleMoustEnter;
hello.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);