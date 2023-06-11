const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// При клике на иконку hamb срабатывает функция hambHandler
hamb.addEventListener("click", hambHandler);

// Действия при клике
function hambHandler(e) {
  e.preventDefault();
  // переключение стилей элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Элементы в попапе
function renderPopup() {
  popup.appendChild(menu);
}

// При нажатии на ссылку или кнопку в бургер-меню..
const links = Array.from(menu.children);

// ..вызывается функия..
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// ..закрытия попапа
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}