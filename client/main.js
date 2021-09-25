
// pressEnter = document.querySelector("enter-mart");

// checkPokeball = document.querySelector("find-pokeballs")

function enterMart () {
    let enter = document.querySelector(".hidden-mart");
    if (enter.style.visibility === "hidden") {
        enter.style.visibility = "visible";
    } else {
        enter.style.visibility === "hidden";
  }
};



//toggle on and off
function checkPokeballs() {
    let yellow = document.querySelectorAll(".yellow-mart");
    for (let i = 0; i < yellow.length; i++) {
      if (yellow[i].style.display === "none") {
        yellow[i].style.display = "grid";
      } else {
        yellow[i].style.display = "none";
    }
  }
}



// secretButton = document.getElementById("secret")

// function displaySecretItem () {
//     let revealItem = document.createElement("p")
//     revealItem.textContent = "Hello" //find a way to append image?
//     secretButton.appendChild(revealItem)
// }

// secretButton.addEventListener('click', displaySecretItem)