const faqTitles = document.querySelectorAll(".title");

faqTitles.forEach((title) => {
  title.addEventListener("click", function () {
    const answer = this.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
      this.querySelector("img").src = "assets/images/icon-plus.svg";
    } else {
      answer.style.display = "block";
      this.querySelector("img").src = "assets/images/icon-minus.svg";
    }
  });
});
