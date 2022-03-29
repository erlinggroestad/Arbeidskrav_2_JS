let snapeDiv = document.getElementById("snape-div");
let professorSnapeImg = document.getElementById("professor-snape-img");
let speechBubble = document.getElementById("speech-bubble");

async function getHpApi(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  return jsonData;
}

const classroomOpener = document.createElement("button");
classroomOpener.innerText = "Open classroom";
document.body.append(classroomOpener);
classroomOpener.addEventListener("click", () =>
  getHpApi("http://hp-api.herokuapp.com/api/characters").then((jsonData) => {
    console.log(jsonData[7]);
    document.getElementById("professor-snape-img").src = jsonData[7].image;
    professorSnapeImg.addEventListener("mouseenter", speechBubbleHover);
  })
);

function speechBubbleHover() {
  speechBubble.style.opacity = 100;
  professorSnapeImg.addEventListener("mouseleave", speechBubbleLeave);
}
function speechBubbleLeave() {
  speechBubble.style.opacity = 0;
}
