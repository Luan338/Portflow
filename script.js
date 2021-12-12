const btnMobile = document.getElementById("btn-mobile");

function activateFunction() {
  const nav = document.getElementById("navigation");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", activateFunction);
