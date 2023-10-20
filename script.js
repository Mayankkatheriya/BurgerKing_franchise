let checkBox = [...document.querySelectorAll(`input[type="checkbox"]`)];
let orderBtn = document.querySelector("#orderBtn");
let orderId = document.querySelector(".orderId");
let imageContainer = document.querySelector(".food-img-container");
let image = document.querySelector(".food-img");
let greet = document.querySelector("h3");
let audio = new Audio("./Assets/service-bell-ring-14610.mp3");
function randomTime() {
  return Math.floor(Math.random() * 3000) + 2000; //random number between 2000 to 4999
}
function randomId() {
  return Math.floor(Math.random() * 900) + 100; //random id between 0 and 999
}
function getTime() {
  const h = String(new Date().getHours()).padStart("2", "0");
  const m = String(new Date().getMinutes()).padStart("2", "0");
  const s = String(new Date().getSeconds()).padStart("2", "0");
  const date = String(new Date().getDate()).padStart("2", "0");
  const mon = String(new Date().getMonth() + 1).padStart("2", "0");
  const year = String(new Date().getFullYear());
  let time = year + date + mon + h + m + s;
  return time;
}

orderBtn.addEventListener("click", (e) => {
  audio.play();
  let selectedFood = [];
  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      selectedFood.push(checkBox[i].value);
    }
  }
  // console.log("selected food", selectedFood);
  if (selectedFood.length < 1) {
    alert("Please select atleast one item");
    return;
  }
  //   orderId.style.display = "none";
  orderId.innerHTML = `Preparing Food...`;
  greet.style.display = "none";
  imageContainer.style.display = "none";
  orderBtn.disabled = true;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, randomTime());
  });
  promise.then(() => {
    orderId.innerHTML = `<span class = "uniqueId">Your OrderId:</span> ${getTime()}<span class = "myId">${randomId()}</span>`;
    if (selectedFood.length == 1) {
      image.src = `./Assets/${selectedFood}.jpg`;
    } else if (selectedFood.length == 2) {
      image.src = `./Assets/${selectedFood[0]}${selectedFood[1]}.jpg`;
    } else if (selectedFood.length == 3) {
      image.src = `./Assets/${selectedFood[0]}${selectedFood[1]}${selectedFood[2]}.jpg`;
    } else {
      image.src = "./Assets/comboall.jpeg";
    }
    greet.style.display = "block";
    imageContainer.style.display = "block";
    orderId.style.display = "block";
    orderBtn.disabled = false;
  });
});
