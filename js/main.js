// toggol ham icon
let ham = document.getElementById("ham");
let nList = document.getElementById("nList");

ham.addEventListener("click", () => {

  console.log(ham);
  ham.classList.toggle("toggle-icon");
  console.log(nList);
  nList.classList.toggle("nListOn");

});


let nLink = document.getElementsByClassName("nLink");

  nLink.addEventListener("click", () => {
  nList.classList.toggle("nListOn");
  ham.classList.toggle("toggle-icon");
});





// go Up Button

let up = document.querySelector(".goUp");

window.onscroll = function () {
  // console.log(this.scrollY);

  this.scrollY >= 800
    ? up.classList.add("goUpShow")
    : up.classList.remove("goUpShow");
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};









// let ham = document.getElementById("ham");
// let dnNav = document.getElementById("dnNav");
// let header = document.getElementById("header");
// ham.addEventListener("click", () => {
//     console.log(dnNav);
//     console.log(ham);
//     ham.classList.toggle("ham-activ");
//     dnNav.classList.toggle("dNavShow");
//     header.classList.toggle("btmBd");
// });

// dnNav.addEventListener("click", ()=>{
//   ham.classList.toggle("ham-activ");
//   dnNav.classList.toggle("dNavShow");
//   header.classList.toggle("btmBd");})



