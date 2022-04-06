let snapeDiv = document.getElementById("snape-div");
let professorSnapeImg = document.getElementById("professor-snape-img");
let speechBubble = document.getElementById("speech-bubble");
let snapeInfo = document.getElementById("snape-info");

async function getHpApi(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  return jsonData;
}

fetch("http://hp-api.herokuapp.com/api/characters").then(
  getHpApi("http://hp-api.herokuapp.com/api/characters").then((jsonData) => {
    console.log(jsonData[7]);
    document.getElementById("professor-snape-img").src = jsonData[7].image;
    snapeInfo.innerHTML =
      "My name is " +
      jsonData[7].name +
      " I was born on the " +
      jsonData[7].dateOfBirth +
      ". My wand is made of an unknown material. ";

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

// End severus snape start on students

let startButton = document.getElementById("start-button");
startButton.innerHTML = "Start class";
let studentsArray = [];

async function arrangeStudents(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  return jsonData;
}

startButton.addEventListener("click", () =>
  arrangeStudents("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      let studentsDiv = document.getElementById("students-div");
      showStudents();
      function showStudents() {
        studentsArray.push(jsonData);
        studentsDiv.innerHTML = "";
        for (i = 0; i < 10; i++) {
          {
            let randNum;
            randNum = Math.floor(Math.random() * 101);
            console.log(randNum);
            // bytt om alt til createElement og append til studentsDiv
            // let studentInfo =
            // `<img src="${jsonData[randNum].imgUrl}"onerror="this.src='/images/wizard.png'"/>` +
            // `<h3>${jsonData[randNum].name}</h3>` +
            // jsonData[randNum].house +
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "slett";
            deleteBtn.addEventListener("click", deleteStudent(randNum));
            studentsDiv.append(deleteBtn);
            studentsDiv.innerHTML += `<div>${studentInfo}</div>`;

            studentsArray.push(studentInfo);
          }
        }
      }
    }
  )
);

function deleteStudent(randNum) {
  var areYouSure = prompt("Are you sure? yes/no ");
  if (areYouSure == "yes") {
    jsonData.splice([randNum], 1);
    showStudents();
  } else {
    console.log("nothing happens");
  }
}
