document.addEventListener("DOMContentLoaded", () => {
  // Dynamic copyright year
  const currentYearSpan = document.getElementById("currentyear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Dynamic last modified date
  const lastModifiedSpan = document.getElementById("lastmodified");
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }

  // Hamburger Menu Functionality
  const hamButton = document.getElementById("menu");
  const navigation = document.querySelector(".main-nav");

  if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      hamButton.classList.toggle("open");
    });
  }
});
