let navigation = document.querySelectorAll(".menu__item:not(:first-child)");
if (window.innerWidth < 768) {
  navigation.forEach(element => {
    element.style.display = "none";
  });
}

let burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", function(event) {
  if (!burgerMenu.classList.contains("cross-button")) {
    burgerMenu.classList.toggle("cross-button");
    burgerMenu.children[0].style.transform = "rotate(-45deg)";
    burgerMenu.children[0].style.top = "8px";
    burgerMenu.children[1].style.display = "none";
    burgerMenu.children[2].style.transform = "rotate(45deg)";
    burgerMenu.children[2].style.left = "13px";
    burgerMenu.children[2].style.bottom = "3px";
    navigation.forEach(element => {
      element.style.display = "flex";
    });
  } else if (burgerMenu.classList.contains("cross-button")) {
    burgerMenu.classList.toggle("cross-button");
    burgerMenu.children[0].style.transform = "none";
    burgerMenu.children[0].style.top = "0";
    burgerMenu.children[1].style.display = "block";
    burgerMenu.children[2].style.transform = "none";
    burgerMenu.children[2].style.bottom = "0";
    burgerMenu.children[2].style.left = "0";
    navigation.forEach(element => {
      element.style.display = "none";
    });
  }
});

let programFormSubmitButton = document.querySelector(".program-form__submit");
if (programFormSubmitButton != null) {
  programFormSubmitButton.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(document.querySelector(""))
  })
}