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

const scrolling = document.querySelector(".scrollable");
// console.log(scrolling);
let isDown = false;
let startX;
let scrolledLeft;

scrolling.addEventListener("mouseleave", (e) => {
  isDown = false;
});
scrolling.addEventListener("mouseup", (e) => {
  isDown = false;
});

scrolling.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - scrolling.offsetLeft;
  // console.log(startX)
  scrolledLeft = scrolling.scrollLeft;
  // console.log(scrolledLeft)
});
scrolling.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  let x = e.pageX - scrolling.offsetLeft;
  // console.log(x);
  let pas = x - startX;
  scrolling.scrollLeft = scrolledLeft - pas;
});

// ****************************************
let isDragging;

scrolling.addEventListener("touchstart", (e) => {
  isDragging = true;

  startX = e.touches[0].pageX - scrolling.offsetLeft;
  // console.log(startX)
  scrolledLeft = scrolling.scrollLeft;
});

scrolling.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  let x = e.touches[0].pageX - scrolling.offsetLeft;
  // console.log(x)
  let pas = x - startX;
  // console.log(pas)
  scrolling.scrollLeft = scrolledLeft - pas;
});

scrolling.addEventListener("touchend", () => {
  isDragging = false;
});
