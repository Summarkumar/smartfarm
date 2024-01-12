/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* login */
/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById("sign-up"),
  signIn = document.getElementById("sign-in"),
  loginIn = document.getElementById("login-in"),
  loginUp = document.getElementById("login-up");

signUp.addEventListener("click", () => {
  // Remove classes first if they exist
  loginIn.classList.remove("block");
  loginUp.classList.remove("none");

  // Add classes
  loginIn.classList.toggle("none");
  loginUp.classList.toggle("block");
});

signIn.addEventListener("click", () => {
  // Remove classes first if they exist
  loginIn.classList.remove("none");
  loginUp.classList.remove("block");

  // Add classes
  loginIn.classList.toggle("block");
  loginUp.classList.toggle("none");
});
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab links and tab content elements
  const tabLinks = document.querySelectorAll(".nav__link");
  const tabContents = document.querySelectorAll(".section");

  // Function to show the selected tab and update the active link
  function showTab(tabId) {
    tabContents.forEach((tab) => {
      tab.style.display = "none";
    });

    const selectedTab = document.getElementById(tabId);

    if (selectedTab) {
      selectedTab.style.display = "block";
    }
  }

  // Add click event listeners to the tab links
  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function (event) {
      event.preventDefault();
      const tabId = this.getAttribute("href").substring(1);
      showTab(tabId);
    });
  });

  // Set the "Login" tab as active by default
  showTab("home");
});
