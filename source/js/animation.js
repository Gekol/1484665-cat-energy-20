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
  fatCat.style.left = "calc(50% - " + leftDistance + "px)";
  slimCat.style.width = (width * rangeInput.value / 100) + "px";
  slimCat.style.right = "calc(50% - " + rightDistance + "px)";
  slimCat.children[slimCat.children.length - 1].style.position = "relative";
  slimCat.children[slimCat.children.length - 1].style.right = width * (100 - rangeInput.value) / 100 + "px";
}

let rangeInput = document.querySelector(".bar__block");
let fatCat = document.querySelector(".cat__before");
let slimCat = document.querySelector(".cat__after");
let width = 0;
let leftDistance = 0;
let rightDistance = 0;

if (window.innerWidth < 768) {
  width = 320;
  leftDistance = 160;
  rightDistance = 160;
} else if (window.innerWidth < 1440) {
  width = 672;
  leftDistance = 336;
  rightDistance = 336;
} else {
  width = 730;
  leftDistance = 342;
  rightDistance = 387.5;
}

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

let popupButtons = document.querySelectorAll(".food__order-button, .additional-order-button");
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
  });
}

let phoneInput = document.querySelector(".program-form__input__phone");
if (phoneInput != null) {
  phoneInput.addEventListener("change", function(event) {
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

let emailInput = document.querySelector(".program-form__input__name");
if (emailInput != null) {
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

let nameInput = document.querySelector(".program-form__input__name");
if (emailInput != null) {
  nameInput.addEventListener("change", function(event) {
    if (/^[a-zA-Zа-яА-Я]+$/.test(nameInput.value) != true) {
      nameInput.classList.add("program-form__input__error");
    } else {
      nameInput.classList.remove("program-form__input__error");
    }
  });
}

let ageInput = document.querySelector(".program-form__input__age");
console.log(ageInput);
if (ageInput != null) {
  ageInput.addEventListener("change", function(event) {
    if (/^\d+$/.test(ageInput.value) != true) {
      ageInput.classList.add("program-form__input__error");
    } else {
      ageInput.classList.remove("program-form__input__error");
    }
  });
}

let weightInput = document.querySelector(".program-form__input__weight");
if (weightInput != null) {
  weightInput.addEventListener("change", function(event) {
    if (/^\d+$/.test(ageInput.value) != true) {
      weightInput.classList.add("program-form__input__error");
    } else {
      weightInput.classList.remove("program-form__input__error");
    }
  });
}

let additionalGoods = document.querySelectorAll(".additional-good__label, .program-form__aim");
additionalGoods.forEach(elem => {
  elem.addEventListener("keydown", function(event) {
    console.log(event.keyCode);
    if (event.keyCode == 13) {
      let inputCheckbox = elem.previousElementSibling;
      console.log(inputCheckbox);
      inputCheckbox.checked = !inputCheckbox.checked;
    }
  });
})
