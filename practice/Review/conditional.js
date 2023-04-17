const age = parseInt( prompt("How old are you?"));

//Int型
//parseInt()


//ArgumentがNaN(Not a Number)の場合trueをかえす
//isNaN()
console.log(isNaN(age));
const chack = isNaN(age);
if (age >= 20){
    console.log("You can Dinkg!")
}else if (chack == true ){
    console.log("Please write a number!")
}else {
    console.log("Sorry.. You are too young")
};  

// const title = document.querySelector(".hello");
// html 부르기