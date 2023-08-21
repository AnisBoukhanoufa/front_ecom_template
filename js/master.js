let navButton = document.querySelector(".navbar .container div>i");
let navbar = document.querySelector(".navbar .container div ul");
let lis = document.querySelector(".navbar .container div ul li");

navButton.addEventListener("click", (e) => {
  e.target.classList.toggle("open"), navbar.classList.toggle("open");
});

navbar.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.addEventListener("click", (e) => {
  if (e.target !== navbar && e.target !== navButton) {
    navbar.classList.remove("open");
    navButton.classList.remove("open");
  }
});

mainImg = document.querySelector(".details .product>img");
rowImages = document.querySelectorAll(".details .product>div img");

rowImages.forEach((element) => {
  element.addEventListener("click", (event) => {
    console.log(event.target.src);
    // mainImg.src=event.target.src;
    [mainImg.src, event.target.src] = [event.target.src, mainImg.src];
  });
});

// ***************************

productBoxs = document.querySelectorAll(".product-box");

productBoxs.forEach((element) => {
  element.addEventListener("click", (event) => {
    window.localStorage.setItem("img", event.currentTarget.children[0].src);
    window.location.href = "single.html";
  });
});

var cartButton = document.querySelectorAll("td button");

cartButton.forEach((element) => {
  element.onclick = (e) => {
    element.parentElement.parentElement.remove();
  };
});

productBoxs = document.querySelectorAll(".product-box");

productBoxs.forEach((element) => {
  element.addEventListener("click", (event) => {
    window.localStorage.setItem("img", event.currentTarget.children[0].src);
    window.location.href = "single.html";
  });
});

var cartButton = document.querySelectorAll("td button");

cartButton.forEach((element) => {
  element.onclick = (e) => {
    element.parentElement.parentElement.remove();
  };
});
// **************************************


// ****************************************

// ************************
let images = [
  "img/products/f1.jpg",
  "img/products/f2.jpg",
  "img/products/f4.jpg",
  "img/products/f3.jpg",
];
let currentIndex = 0;
let productBox = document.querySelectorAll(".product-box");
// images[0]= e.children[0].src;
let intervalId = null;

productBox.forEach((element) => {
  element.onmouseover = (eventMouse) => {
    var theOne = eventMouse.currentTarget.children[0];
    console.log(eventMouse.currentTarget.children[0]);
    images[0] = eventMouse.currentTarget.children[0].src;
    let originalImage = eventMouse.currentTarget.children[0].src;
    intervalId = setInterval(() => {
      changeImage(theOne);
    }, 1000);
  };

  element.onmouseout = (e) => {
    clearInterval(intervalId);
    resetImage(e.currentTarget.children[0]);
  };
});

function changeImage(boxx) {
  currentIndex = (currentIndex + 1) % images.length;
  boxx.src = images[currentIndex];
}
function resetImage(boxx) {
  boxx.src = images[0]; // Reset to the first image
}
