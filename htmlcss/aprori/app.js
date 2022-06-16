function show(anything) {
  document.querySelector(".textbox").value = anything;
}
let right = document.querySelector(".right");
right.onclick = function () {
  right.classList.toggle("active");
};
