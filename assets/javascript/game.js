// create blank variables 
var computerChoice = "";
var userTotal = 0;
var wins = 0;
var losses = 0;
var Button1 = "";
var Button2 = "";
var Button3 = "";
var Button4 = "";

// set sound effect
var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/sounds/jewel-sound.mp3");

// reset variables to zero
function reset() {
    computerChoice = "";
    userTotal = 0;
    // wins = 0;
    // losses = 0;
    Button1 = "";
    Button2 = "";
    Button3 = "";
    computerChoice = [(Math.floor(Math.random() * 70) + 30)];

    // write the computer choice and user total to the DOM
    computerChoiceText.textContent = computerChoice;


    // assign random values to buttons and convert them numbers not string
    // buttons can't be zerp
    userTotal = parseInt(userTotal);

    Button1 = [(Math.floor(Math.random() * 15) + 2) ];
    Button1 = parseInt(Button1);

    Button2 = [(Math.floor(Math.random() * 10) + 2)];
    Button2 = parseInt(Button2);

    Button3 = [(Math.floor(Math.random() * 7) + 2 )];
    Button3 = parseInt(Button3);

    Button4 = [(Math.floor(Math.random() * 12) + 1 )];
    Button4 = parseInt(Button4);
}


// check total
function checkTotal(){    
    if (userTotal < computerChoice) {
        userTotalText.textContent = userTotal;

    } else if (userTotal == computerChoice) {
        wins++;
        console.log("you win")
        userTotalText.textContent = 0;
        winsText.textContent = "Wins: " + wins;
        reset();
    } else {
        losses++;
        console.log("you lose")
        userTotalText.textContent = 0;
        lossesText.textContent ="Losses: " + losses;
        reset()
    }
}

// assign varibales to elements 
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var userTotalText = document.getElementById("user-total-text");

$(document).ready(function () {
    reset();
    // variables are now zero

    // computer choice is random, must be over 30
    computerChoice = [(Math.floor(Math.random() * 70) + 30)];

    // write the computer choice and user total to the DOM
    computerChoiceText.textContent = computerChoice;


    // assign random values to buttons and convert them numbers not string
    userTotal = parseInt(userTotal);

    Button1 = [(Math.floor(Math.random() * 15) + 2) ];
    Button1 = parseInt(Button1);

    Button2 = [(Math.floor(Math.random() * 10) + 2)];
    Button2 = parseInt(Button2);

    Button3 = [(Math.floor(Math.random() * 7) + 2 )];
    Button3 = parseInt(Button3);

    Button4 = [(Math.floor(Math.random() * 12) + 1 )];
    Button4 = parseInt(Button4);

    

    // move to reset function?
    wins = parseInt(wins);
    utton3 = parseInt(losses);
    
    console.log(userTotal);

   
        
    


            // buttons work and change user total
            $("#Button1").on("click", function () {
                audioElement.play();
                userTotal = userTotal + Button1;
                console.log(userTotal);
                userTotalText.textContent = userTotal;
                checkTotal();
                
            });

            $("#Button2").on("click", function () {
                audioElement.play();
                userTotal = userTotal + Button2;
                console.log(userTotal);
                userTotalText.textContent = userTotal;
                checkTotal();
            });
            $("#Button3").on("click", function () {
                audioElement.play();
                userTotal = userTotal + Button3;
                console.log(userTotal);
                userTotalText.textContent = userTotal;
                checkTotal();
            });
            $("#Button4").on("click", function () {
                audioElement.play();
                userTotal = userTotal + Button4;
                console.log(userTotal);
                userTotalText.textContent = userTotal;
                checkTotal();
            });

        
    






});