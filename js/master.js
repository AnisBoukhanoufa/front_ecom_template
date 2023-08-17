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

rowImages.forEach(element => {
element.addEventListener("click",(event)=>{
    console.log(event.target.src);
    // mainImg.src=event.target.src;
    [mainImg.src,event.target.src]=[event.target.src,mainImg.src]
})    
});



// ***************************


productBoxs = document.querySelectorAll(".product-box");


productBoxs.forEach((element)=>{
   
    element.addEventListener("click",(event)=>{  
        window.localStorage.setItem("img",event.currentTarget.children[0].src)
        window.location.href="single.html"
        
    })
})


var cartButton=document.querySelectorAll("td button");

cartButton.forEach((element)=>{
    element.onclick=(e)=>{
        element.parentElement.parentElement.remove()
    }
})