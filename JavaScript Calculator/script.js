// Declare variable names
let displayNumber = document.getElementById("displayNumber");
let clear = document.getElementById("clear");
let calculate = document.getElementById("calculate");
let number = document.getElementsByClassName("numBtn");

// For number keys
for (let i = 0; i < number.length; i++) {  
    number[i].addEventListener("click", function(){
        displayNumber.innerHTML += number[i].innerHTML;
    });  
};

// For Clear button
clear.addEventListener("click",function(){
    displayNumber.innerHTML = "";
});

// For equal button
calculate.addEventListener("click", function(){
    let result = eval(displayNumber.innerHTML);
    displayNumber.innerHTML = result;
});