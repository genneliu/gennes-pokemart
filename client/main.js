enterPokemart = document.querySelector("enter-button")

// function enterMart () {
//     console.log("hello!")
// };

// enterPokemart.addEventListener("click", enterMart)

//toggle on and off
function enterMart() {
    let x = document.querySelector(".yellow-mart");
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
  }


// secretButton = document.getElementById("secret")

// function displaySecretItem () {
//     let revealItem = document.createElement("p")
//     revealItem.textContent = "Hello" //find a way to append image?
//     secretButton.appendChild(revealItem)
// }

// secretButton.addEventListener('click', displaySecretItem)