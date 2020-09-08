let navigation = document.querySelectorAll(".menu__item");
if (window.innerWidth < 768) {
  navigation.forEach(element => {
    element.style.display = "none";
  });
}

let burgerMenu = document.querySelector(".burger-menu");
if (window.innerWidth < 768) {
  burgerMenu.style.display = "block";
}
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
  fatCat.style.left = "calc(50% - " + width + "px/2 + 23px)";
  slimCat.style.width = (width * rangeInput.value / 100) + "px";
  slimCat.style.right = "calc(50% - " + width + "px/2 - 23px)";
  slimCat.children[slimCat.children.length - 1].style.position = "relative";
  slimCat.children[slimCat.children.length - 1].style.right = width * (100 - rangeInput.value) / 100 + "px";
}

let rangeInput = document.querySelector(".bar-block");
let fatCat = document.querySelector(".cat__before");
let slimCat = document.querySelector(".cat__after");
let width = window.innerWidth < 768?320:730;

if (rangeInput != null) {
  if (window.innerWidth < 768) {
    rangeInput.value = 0;
  }
  hideCat(null);
  rangeInput.addEventListener("input", hideCat);
  let buttonBefore = document.querySelector(".bar__button__before");
  if (buttonBefore != null) {
    buttonBefore.addEventListener("click", function(event) {
      event.preventDefault();
      rangeInput.value = 0;
      hideCat();
    })
  }
  let buttonAfter = document.querySelector(".bar__button__after");
  if (buttonAfter != null) {
    buttonAfter.addEventListener("click", function(event) {
      event.preventDefault();
      rangeInput.value = 100;
      hideCat();
    })
  }
}

let popupButtons = document.querySelectorAll(".food__order-button");
popupButtons.forEach(elem => {
  elem.addEventListener("click", function(event) {
    event.preventDefault();
  })
})

let showMoreButton = document.querySelector(".show-more__button");
if (showMoreButton != null) {
  showMoreButton.addEventListener("click", function(event) {
    let goods = document.querySelectorAll(".food__item");
    goods.forEach(elem => {
      elem.style.display = "flex";
    });
    let showMoreBlock = document.querySelector(".food__item.show-more");
    showMoreBlock.style.display = "none";
  });
}

let phoneInput = document.querySelector(".program-form__input__phone");
if (phoneInput != null) {
  console.log(phoneInput);
  phoneInput.addEventListener("change", function(event) {
    console.log(phoneInput.value);
    console.log(/^\d+{8}$/.test(phoneInput.value) );
    if (/^\d+{8}$/.test(phoneInput.value) != true) {
      phoneInput.parentElement.classList.add("contact-data__block__phone__error");
      phoneInput.classList.add("program-form__input__error");
    } else {
      phoneInput.parentElement.classList.remove("contact-data__block__phone__error");
      phoneInput.classList.remove("program-form__input__error");
    }
  });
}

let emailInput = document.querySelector(".program-form__input__email");
if (emailInput != null) {
  console.log(emailInput);
  emailInput.addEventListener("change", function(event) {
    if (/@/.test(emailInput.value) != true) {
      emailInput.parentElement.classList.add("contact-data__block__email__error");
      emailInput.classList.add("program-form__input__error");
    } else {
      emailInput.parentElement.classList.remove("contact-data__block__email__error");
      emailInput.classList.remove("program-form__input__error");
    }
  });
}
