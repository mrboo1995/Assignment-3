"use strict";
// ABOUT
const openContent = document.querySelector(".hide");
const btnSubmit = document.querySelector(".btn-primary");
const closeContent = document.querySelector(".submit-email");
const inputEmail1 = document.querySelector(".form-control");
const wrongEmail = document.querySelector(".wrong-email");

function checkEmail() {
  const inputEmail = inputEmail1.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!regex.test(inputEmail)) {
    wrongEmail.textContent = "Hãy nhập địa chỉ email hợp lệ!";
    return false;
  } else {
    openContent.style.display = "block";
    closeContent.style.display = "none";
  }
}
// JOB-INFOR
const viewMore = document.querySelectorAll(".viewmore");
const viewLess = document.querySelectorAll(".viewless");
const hideView = document.querySelectorAll(".hideview");

for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", function () {
    hideView[i].classList.remove("hideview");
    viewLess[i].classList.remove("viewless");
    viewMore[i].style.display = "none";
  });
  viewLess[i].addEventListener("click", function () {
    hideView[i].style.display = "none";
    viewLess[i].style.display = "none";
    viewMore[i].style.display = "block";
  });
}
