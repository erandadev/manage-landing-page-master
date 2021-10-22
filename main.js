const openBtn = document.querySelector("#open");
const overlay = document.querySelector(".overlay");
const navList = document.querySelector(".nav-list");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const errorBox = document.querySelector(".error-message");
let isOpen = false;

// Navifation Menu
openBtn.addEventListener("click", (e) => {
  openBtn.classList.remove("rotate");

  if (!isOpen) {
    openBtn.classList.add("rotate");
    overlay.style.display = "block";
    navList.classList.add("menu-show");

    setTimeout(() => {
      openBtn.src = "./images/icon-close.svg";
    }, 100);

    openBtn.addEventListener("animationend", () =>
      openBtn.classList.remove("rotate")
    );
    isOpen = true;
  } else {
    openBtn.classList.add("rotate");
    overlay.style.display = "none";
    navList.classList.remove("menu-show");

    setTimeout(() => {
      openBtn.src = "./images/icon-hamburger.svg";
    }, 100);

    openBtn.addEventListener("animationend", () =>
      openBtn.classList.remove("rotate")
    );

    isOpen = false;
  }
});

// Validate Email
form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorBox.innerHTML = "";
  const regex = new RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  if (email.value == "") {
    errorBox.innerHTML = "Field is empty";
  } else if (!regex.test(email.value)) {
    errorBox.innerHTML = "Enter valid email";
  }
});


const testimonialsGrid = document.querySelector('.testimonials-grid')

const hammertime = new Hammer(testimonialsGrid);

hammertime.on('panleft', (e) => {
  console.log(e)
  if(testimonialsGrid.scrollLeft < 1) {
    testimonialsGrid.scrollTo(8, 0)
  } else {
    testimonialsGrid.scrollTo(testimonialsGrid.scrollLeft + 9, 0)
  }
});

hammertime.on('panright', (e) => {
  testimonialsGrid.scrollTo(testimonialsGrid.scrollLeft - 9, 0)
});
