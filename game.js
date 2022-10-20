var list = ["papier.png", "schere.png", "stein.png"];
var papier = document.getElementById("papier");
var schere = document.getElementById("schere");
var stein = document.getElementById("stein");
var pcChoice = document.getElementById("pc-choice");
var printResult = document.getElementById("result");


let schereImage = "assets/schere.png"
let steinImage = "assets/stein.png"
let papierImage = "assets/papier.png"


papier.onclick = makeChoice;
schere.onclick = makeChoice;
stein.onclick = makeChoice;


function makeChoice() {
    var pc = RandomPaper();


    var choice = this.dataset.id;
    if (pc == 0 && choice == 0) {
        pcChoice.src = papierImage
        console.log("my choice", choice, "pc choice ", pc);
        result = "you both made the same choice!";
    } else if (pc == 0 && choice == 1) {

        pcChoice.src = papierImage

        console.log("my choice", choice, "pc choice ", pc);
        result = "You won, scissors cut paper!";
    } else if (pc == 0 && choice == 2) {
        pcChoice.src = papierImage
        console.log("my choice", choice, "pc choice ", pc);
        result = "You lost, paper wraps stone!";
    } else if (pc == 1 && choice == 0) {
        pcChoice.src = schereImage
        console.log("my choice", choice, "pc choice ", pc);
        result = "You lost, scissors cut the paper!";
    } else if (pc == 1 && choice == 1) {

        pcChoice.src = schereImage
        console.log("my choice", choice, "pc choice ", pc);
        result = "you both made the same choice!";
    } else if (pc == 1 && choice == 2) {
        pcChoice.src = steinImage

        console.log("my choice", choice, "pc choice ", pc);
        result = "You won, Stone breaks scissors!";
    } else if (pc == 2 && choice == 0) {
        pcChoice.src = steinImage
        console.log("my choice", choice, "pc choice ", pc);
        result = "You won, paper wraps stone!";
    } else if (pc == 2 && choice == 1) {

        pcChoice.src = steinImage
        console.log("my choice", choice, "pc choice ", pc);
        result = "You lost, Stone breaks scissors!";
    } else if (pc == 2 && choice == 2) {

        pcChoice.src = schereImage
        console.log("my choice", choice, "pc choice ", pc);
        result = "you both made the same choice!";
    }

    printResult.innerHTML = result;
}

function RandomPaper() {
    var number = Math.round(Math.random() * 2);
    pcChoice.src = list[number];

    console.log("pc selected this", pcChoice.src);
    return number;
}