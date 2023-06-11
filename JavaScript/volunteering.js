//Модальное окно
let modal = document.getElementById("myModal");

//Кнопка открытия модального окна
let btn = document.getElementById("myBtn");

//SVG картинка, которая закрыает модальное окно
let span = document.getElementsByClassName("close")[0];

//Модальное окно будет закрываться при нажатии на кнопку отправки в форме
let sub = document.getElementById("subm-close");

//Когда пользователь нажимает на кнопку открытия...
btn.onclick = function() {
  modal.style.display = "block";
}

//Когда пользователь нажимает на SVG закрытия...
span.onclick = function() {
  modal.style.display = "none";
}

//Когда пользователь "отправляет" форму...
sub.onclick = function() {
    modal.style.display = "none";
}

//Когда пользователь нажимает вне модального окна...
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}