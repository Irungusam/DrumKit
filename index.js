for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("click", function handleClick() {
      let buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}








//  CONSTRUCTOR FUNCTIONS

// let houseKeeper = {
//     name: "Sarah",
//     age: 35,
//     yearsOfExpirience: 10,
//     languages: ['English','French'],
//     haveAllergies: false
// }

// console.log(houseKeeper.name);

// function HouseKeeper (name,age,yearsOfExpirience,languages,haveAllergies) {
//     this.name = name,
//     this.age = age,
//     this.yearsOfExpirience = yearsOfExpirience,
//     this.languages = languages,
//     this.haveAllergies = haveAllergies
// }

// let houseKeeper2 = new HouseKeeper("Jane",38,12,"['English','Swahili']",true);

// ADDED METHOD

// function HouseKeeper(name, age, yearsOfExpirience, languages, haveAllergies) {
//   this.name = name;
//   this.age = age;
//   this.yearsOfExpirience = yearsOfExpirience;
//   this.languages = languages;
//   this.haveAllergies = haveAllergies;
//   this.cleanHouse = function () {
//     alert("Cleaning in progress!");
//     // takeMop();
//     // moveAround();
//   };
// }

// let houseKeeper2 = new HouseKeeper(
//   "Jane",
//   38,
//   12,
//   ["English", "Swahili"],
//   true
// );

// // console.log(houseKeeper2.name);
// houseKeeper2.cleanHouse();
