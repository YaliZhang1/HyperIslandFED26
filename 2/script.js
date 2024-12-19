document.addEventListener("DOMContentLoaded", function () {
  const contents = document.querySelectorAll(".longText");
  contents.forEach((content, index) => {
    const toggleButton = document.getElementById(`toggleButton${index + 1}`);

    if (content.scrollHeight > content.clientHeight) {
      toggleButton.style.display = "inline";
    }

    toggleButton.addEventListener("click", function () {
      if (
        content.style.overflow === "hidden" ||
        content.style.overflow === ""
      ) {
        content.style.overflow = "visible";
        content.style.maxHeight = "100%";
        toggleButton.textContent = "Read less";
        content.style.display = "inline"; // Show the toggle button again after closing the content
      } else {
        content.style.maxHeight = `calc(1.5em *6)`;
        content.style.overflow = "hidden";
        toggleButton.textContent = "Read more";
        content.style.display = "-webkit-box"; // Show the toggle button again after closing the content
      }
    });
  });
});
