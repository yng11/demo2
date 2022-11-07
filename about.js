const header = document.querySelector("header");
const menuBtn = document.querySelector("input");
const navMo = document.querySelector(".nav-mo");
const backgroundOverlay = document.querySelector(".background-overlay");
const aboutWrapper = document.querySelector(".about-wrapper");
const aboutTitle = document.querySelector(".about-title");
const aboutTitle2 = document.querySelector(".about-title-2");
const aboutDesc = document.querySelector(".about-desc");
const aboutDesc2 = document.querySelector(".about-desc-2");
const aboutArrow = document.querySelector(".about-arrow");

let pageCount = 1;

menuBtn.addEventListener("click", function () {
  navMo.classList.toggle("active");
  header.classList.toggle("active");
});

function changePage() {
  if (pageCount >= 5) {
    return;
  } else {
    if (aboutWrapper.classList.contains("last-page")) {
      aboutWrapper.classList.remove("last-page");
    }
    pageCount++;
  }

  switch (pageCount) {
    case 2:
      backgroundOverlay.style.opacity = 0.6;
      aboutTitle.innerHTML = "HIDEOUT is a brand within Web3.0";
      aboutDesc.innerHTML =
        "We attracts the most artistic and carefree individuals within the Web3 space <br>as it's known for its exclusive and hip culture. <br>‘Without community, HIDEOUT is nothing’";
      break;
    case 3:
      backgroundOverlay.style.opacity = 0.4;
      aboutTitle.innerHTML = "HIDEOUT, we, our, and us";
      aboutDesc.innerHTML =
        "1,000 PFPs are another version of yourself, 'Identity,' <br>that will lead you into the new world - Metaverse. <br>This new 'Identity' grants you a membership to access what is known as the HIDEOUT.";
      break;
    case 4:
      backgroundOverlay.style.opacity = 0.2;
      aboutTitle.innerHTML = "Are you ready?";
      aboutDesc.innerHTML =
        "Within Web3, HIDEOUT continues to innovate the Metaverse - Doing always works fancy <br>We believe that we can love, enjoy, and grow HIDEOUT as a leading community together. <br>Together, we mark a new era to come.";
      break;
    case 5:
      backgroundOverlay.style.opacity = 0;

      aboutTitle.innerHTML = "Fuxk Roadmap";
      aboutDesc.innerHTML =
        "No plan. <br>We always do what we want. <br>Start from fashion to every dope things we want to do in Web3.0";
      aboutWrapper.classList.add("last-page");
      aboutTitle2.style.display = "block";
      aboutDesc2.style.display = "block";
      aboutArrow.style.display = "none";
      break;
  }
}
