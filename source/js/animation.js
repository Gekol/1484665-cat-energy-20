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
  })
}

function hideCat(event) {
  fatCat.style.width = (width * (100 - rangeInput.value) / 100) + "px";
  console.log("calc(50% - " + width + "px/2)");
  fatCat.style.left = "calc(50% - " + width + "px/2)";
  slimCat.style.width = (width * rangeInput.value / 100) + "px";
  slimCat.style.right = "calc(50% - " + width + "px/2)";
  console.log(slimCat.children[slimCat.children.length - 1]);
  slimCat.children[slimCat.children.length - 1].style.position = "relative";
  slimCat.children[slimCat.children.length - 1].style.right = width * (100 - rangeInput.value) / 100 + "px";
}

let rangeInput = document.querySelector(".bar-block");
let fatCat = document.querySelector(".cat__before");
let slimCat = document.querySelector(".cat__after");
let width = window.innerWidth < 768?320:690;

if (rangeInput != null) {
  hideCat(null);
  rangeInput.addEventListener("input", hideCat)
}
