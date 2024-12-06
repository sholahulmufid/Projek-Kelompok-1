document.addEventListener("DOMContentLoaded", function () {
  fetch("/html/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading header:", error);
    });
});
