const navbars = Array.from(document.querySelectorAll(".navbar"));
const contentContainers = Array.from(
  document.querySelectorAll(".content-container")
);

let selectedNavbarIndex = -1;

const onClickNav = (e) => {
  const name = e.currentTarget.innerText;
  const currentIndex = navbars.indexOf(e.currentTarget);

  const isAlreadySelected = currentIndex === selectedNavbarIndex;

  navbars.forEach((navbar) => (navbar.style.color = ""));
  contentContainers.forEach((container) => (container.style.boxShadow = ""));

  if (!isAlreadySelected) {
    selectedNavbarIndex = currentIndex;
    e.currentTarget.style.color = "#FDFD54";
    if (name === "시계") {
      contentContainers[0].style.boxShadow =
        "inset 5px 5px 1px #FDFD54, 5px 5px 2px black";
      contentContainers[1].style.boxShadow =
        "inset 5px 5px 1px #FDFD54, 5px 5px 2px black";
    } else {
      contentContainers[currentIndex + 1].style.boxShadow =
        "inset 5px 5px 1px #FDFD54, 5px 5px 2px black";
    }
  } else {
    selectedNavbarIndex = -1;

    navbars.forEach((navbar) => (navbar.style.color = ""));
    contentContainers.forEach((container) => (container.style.boxShadow = ""));
  }
};

navbars.forEach((navbar) => navbar.addEventListener("click", onClickNav));
