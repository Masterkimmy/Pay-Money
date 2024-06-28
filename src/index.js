const items = document.querySelectorAll(".ads");
const heading = document.querySelectorAll(".anim");

items.forEach((item) =>
  item.addEventListener("click", () => {
    heading.forEach((heading) => {});
    const nextEle = item.nextElementSibling;
    if (nextEle.style.display === "none") {
      return (nextEle.style.display = "flex");
    } else {
      return (nextEle.style.display = "none");
    }
  })
);
function toogle() {
  const mobile = document.querySelector(".home");
  mobile.classList.contains("-top-full")
    ? mobile.classList.replace("-top-full", "top-14")
    : mobile.classList.replace("top-14", "-top-full");
}
