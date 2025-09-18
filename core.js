
// function for tab bar
function openPage(file, tabElement) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
  tabElement.classList.add("active");

  fetch(file).then((response) => response.text()).then((html) => {
      document.getElementById("tabcontent").innerHTML = html;
    })

    .catch((error) => {
      document.getElementById("tabcontent").innerHTML =
        "error loading the content.";
      console.error("Error loading the tab", error);
    });
}

window.onload = () => {
  openPage("home.html", document.getElementById("tabcontent"));
};