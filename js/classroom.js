let snapeDiv = document.getElementById("snape-div");
let professorSnapeImg = document.getElementById("professor-snape-img");

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
    professorSnapeImg.addEventListener("mouseover", speechBubbleHover);
  })
);

function speechBubbleHover() {
  //   let speechBubble = document.createElement("div");
  //   speechBubble.innerHTML == "This shit works - Snape";
  //   document.snapeDiv.append(speechBubble);
  console.log("DET FUNGERER FOR FAEN");
}
