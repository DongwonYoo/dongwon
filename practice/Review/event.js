const hello =document.querySelector("#hello");

const link = document.querySelector("a");


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

function handleLinkClick(event){
    event.preventDefault();//eventの基本動作を止める

    console.log(event);
}

link.addEventListener("click", handleLinkClick);

hello.onclick = handleTitleClick;
hello.onmouseenter = handleMoustEnter;
hello.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);