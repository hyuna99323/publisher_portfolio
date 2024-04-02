// advantage part 마우스 올라가면 비디오 재생
const items = document.querySelectorAll(".advantageBox");

for(let el of items){
  el.addEventListener("mouseenter", (e) => {
    e.currentTarget.querySelector("video").play();
  });
  el.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelector("video").pause();
  });
}
