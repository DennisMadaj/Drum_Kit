
//Findet ersten Button addet EventListener zu dem Button und macht dann die Funktion HandleClick
// Keine () bei HandleClick da sonst die Funktion sofort ausgeführt wird

//Es wird eine neue Variable erstellt alle Drums selektiert und deren Anzahl gezählt und erfasst.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


//eine Schleife wird erstellt, und immer um 1 erhöht. Dieser höhrt ob ein Klick, ausgeführt wird, und triggert makeSound + buttonAnimation.  
for (var i =0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
       
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    

    });
}

document.addEventListener ("keydown", function (event){
    

    makeSound(event.key);

    buttonAnimation(event.key);

});

// Diese Funktion macht die Sounds und spielt sie ab. Diese werden nach den einzelnen Instrument gelistet und nach Knöpfen geordnet.
function makeSound(key) {

    switch (key) {
        case "w":
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
           break;

       case "a":
           var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           break;
       
       case "s": 
       var snare = new Audio ("sounds/snare.mp3");
       snare.play();
       break;

       case "d":
       var tom1 = new Audio ("sounds/tom-1.mp3");
       tom1.play();
       break;

       case ("j"):
       var tom2 = new Audio ("sounds/tom-2.mp3");
       tom2.play();
       break;

       case ("k"):
       var tom3 = new Audio ("sounds/tom-3.mp3");
       tom3.play();
       break;

       case ("l"):
       var tom4 = new Audio ("sounds/tom-4.mp3");
       tom4.play();
       break;

       default: console.log(buttonInnerHTML);
    }

}


// Diese Funktion macht die Button Animation. 
function buttonAnimation (currentKey) {

    var activeButton= document.querySelector("." + currentKey)

    //Fügt den Schatten aus der CSS Datei hinzu
    activeButton.classList.add("pressed");


    //Fügt den Timer hinzu sowie das verschwinden des Timers 
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)

}