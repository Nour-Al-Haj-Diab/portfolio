const projectBtn = document.getElementById("projectBtn");

projectBtn.addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});