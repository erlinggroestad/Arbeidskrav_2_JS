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

async function showStudents(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  return jsonData;
}

startButton.addEventListener("click", () =>
  showStudents("http://hp-api.herokuapp.com/api/characters").then(
    (jsonData) => {
      const modifiedArray = jsonData.map((jsonData) => ({
        imgUrl: jsonData.image,
        name: jsonData.name,
        house: jsonData.house,
        student: jsonData.hogwartsStudent,
      }));
      console.log(modifiedArray);

      function studentTester() {
        for (i = 0; i < modifiedArray.length; i++) {
          if ((modifiedArray[i].student = false)) {
            console.log("wtf")
          }
        }
      }

      let studentsDiv = document.getElementById("students-div");
      let studentsArray = [];
      randomStudent();
      function randomStudent() {
        for (i = 0; i < 10; i++) {
          {
            let studentInfo =
              `<img src="${modifiedArray[i].imgUrl}"onerror="this.src='/images/wizard.png'"/>` +
              `<h3>${modifiedArray[i].name}</h3>` +
              modifiedArray[i].house;

            studentsDiv.innerHTML += `<div>${studentInfo}</div>`;
            studentsArray.push(studentInfo);
          }
        }
      }

      console.log(studentsArray);
      // Math.floor(1.9999);
      // Math.floor(1);
      // function randomInt(limit) {
      //   return Math.floor(Math.random() * Math.floor(limit));
      // }
      // function random(choices) {
      //   var index = randomInt(choices.length);
      //   return choices[index];
      // }
      // for (i = 0; i < 11; i++) {
      //   i += random;
      //   console.log("hei jeg kjører")
      // }
    }
  )
);
