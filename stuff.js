document.getElementById("hamburger").addEventListener("click", function() {
  document.getElementsByTagName("nav")[0].classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("open");
  document.getElementsByTagName("body")[0].classList.toggle("nav-open");
});
