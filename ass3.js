"use strict";
const infor = document.querySelector(".infor");
const login = document.querySelector(".email-login");
const btnSubmit = document.querySelector(".btn");
const email = document.getElementById("email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const form = document.querySelector("form");
// ngăn chặn form tự động reload//
form.addEventListener("submit", function (event) {
  // do something
  event.preventDefault();
});
const openInfor = function () {
  login.classList.add("hide");
  infor.classList.remove("hide");
};
btnSubmit.addEventListener("click", function () {
  if (email.value.match(regex)) {
    // login.classList.add("hide");
    // infor.classList.remove("hide");
    openInfor();
  } else {
    alert("Invalid email address. Please try again.");
  }
});

//Chức năng ẩn thông tin nghề nghiệp
const viewMore = document.querySelectorAll(".mypart");
const clickOpen = document.querySelectorAll(".open");
const clickClose = document.querySelectorAll(".close");
const content = document.querySelectorAll(".content");
// di chuot thi hien thi nut viewmore
for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("mouseover", function () {
    clickOpen[i].classList.remove("hide");
  });
  // nha chuot ra thi an nut viewmore
  viewMore[i].addEventListener("mouseout", function () {
    clickOpen[i].classList.add("hide");
  });
  //click nut viewmore--> hien thi them thong tin
  for (let a = 0; a < clickOpen.length; a++) {
    clickOpen[a].addEventListener("click", function () {
      content[a].classList.remove("hide");
      clickOpen[a].classList.add("hide");
      clickClose[a].classList.remove("hide");
    });
  }
  // click nut viewless de thu gon cac thong tin lai nhu ban dau
  for (let u = 0; u < clickOpen.length; u++) {
    clickClose[u].addEventListener("click", function () {
      content[u].classList.add("hide");
    });
  }
}
