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
  jsonData.forEach((character) => {
    studentsArray.push(character);
  });
}

startButton.addEventListener("click", () =>
  arrangeStudents("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      let studentsDiv = document.getElementById("students-div");
      showStudents();
      function showStudents() {
        studentsDiv.innerHTML = "";
        for (i = 0; i < 10; i++) {
          {
            let randNum;
            randNum = Math.floor(Math.random() * 101);
            console.log(randNum);
            // bytt om alt til createElement og append til studentsDiv
            // let studentInfo =
            let studentImg = document.createElement("img");
            studentImg.src = studentsArray[randNum].image;
            //   (studentImg.onerror = errorImage());
            // function errorImage() {
            //   studentImg.src = "/images/wizard.png";
            // }
            // `<img src="${jsonData[randNum].imgUrl}"onerror="this.src='/images/wizard.png'"/>` +
            let studentName = document.createElement("h3");
            studentName.innerHTML = studentsArray[randNum].name;
            // `<h3>${jsonData[randNum].name}</h3>` +
            // jsonData[randNum].house +
            let studentHouse = document.createElement("p");
            studentHouse.innerHTML = studentsArray[randNum].house;

            studentsDiv.append(studentImg, studentName, studentHouse);

            // let deleteBtn = document.createElement("button");
            // deleteBtn.innerText = "delete";
            // deleteBtn.addEventListener("click", deleteStudent(randNum));
            // studentsDiv.append(deleteBtn);
            // studentsDiv.innerHTML += `<div>${studentInfo}</div>`;
          }
        }
      }
    }
  )
);
console.log(studentsArray);
// function deleteStudent(randNum) {
//   var areYouSure = prompt("Are you sure? yes/no ");
//   if (areYouSure == "yes") {
//     jsonData.splice([randNum], 1);
//     showStudents();
//   } else {
//     console.log("nothing happens");
//   }
// }
