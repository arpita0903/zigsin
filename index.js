// const data = require('./data.json')

// console.log(data)
let arr;

const btnAll = document.getElementById("all");
const btnFood = document.getElementById("food");
const btnWork = document.getElementById("work");
const btnGadgets = document.getElementById("gadgets");

const imgContainer = document.getElementById("img-container");

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((objData) => {
    arr = objData.data;
    console.log(arr);
    let ele = "";
    arr?.forEach((item,index) => {
      ele += `<div class="inner-img">
    <img src="${item.src}" alt="image" width="280" height="180">
    <span class="item-label">${item.label}</span>
    <span class="item-index">${index+1}</span>
</div>`;
    });

    imgContainer.innerHTML = ele;
  });

btnAll.addEventListener("click", function() {
    let ele = "";
  arr?.forEach((item,index) => {
    ele += `<div class="inner-img">
      <img src="${item.src}" alt="image" width="280" height="180">
      <span class="item-label">${item.label}</span>
      <span class="item-index">${index+1}</span>
  </div>`;
  });

  imgContainer.innerHTML = ele;
});

btnFood.addEventListener("click", function() {
    let ele = "";
  let foodFilter = arr?.filter((item) => item.category === "FOOD");
  foodFilter?.forEach((item,index) => {
    ele += `<div class="inner-img">
      <img src="${item.src}" alt="image" width="280" height="180">
      <span class="item-label">${item.label}</span>
      <span class="item-index">${index+1}</span>
  </div>`;
  });

  imgContainer.innerHTML = ele;
});

btnWork.addEventListener("click", function() {
    let ele = "";
  let workFilter = arr?.filter((item) => item.category === "WORK");
  workFilter?.forEach((item,index) => {
    ele += `<div class="inner-img">
      <img src="${item.src}" alt="image" width="280" height="180">
      <span class="item-label">${item.label}</span>
      <span class="item-index">${index+1}</span>
  </div>`;
  });

  imgContainer.innerHTML = ele;
});

btnGadgets.addEventListener("click", function() {
    let ele = "";
  let gadgetsFilter = arr?.filter((item) => item.category === "GADGETS");
  gadgetsFilter?.forEach((item,index) => {
    ele += `<div class="inner-img">
      <img src="${item.src}" alt="image" width="280" height="180">
      <span class="item-label">${item.label}</span>
      <span class="item-index">${index+1}</span>
  </div>`;
  });

  imgContainer.innerHTML = ele;
});



// FOR BUTTON ACTIVE

const myButtons = document.getElementById("my-btns");
const btns = myButtons.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    console.log(current)
  current[0].className = current[0].className.replace(" active", "");
  btns[i].className += " active";
  });
}
