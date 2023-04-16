

function plus ( firstNumber, secondNumber){
    console.log( "値は " + (firstNumber+secondNumber));
}
//FunctionのArguments名はFunctionの中だけ

function divide( firstNumber, secondNumber){
    console.log( firstNumber / secondNumber);
}
plus(10, 2);
plus(300, 10)
divide(10,2);


const player =  {
    name: "Dongwon",
    //objectの中でFunctionの宣言はちがう
    sayHello: function(otherPersonName){
        console.log("Hello! " + otherPersonName);
    },

};
console.log(player.name);
player.sayHello("Mark");
player.sayHello("Jin");