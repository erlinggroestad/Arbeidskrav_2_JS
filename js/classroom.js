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
    () => {
      showStudents();
    }
  )
);
let visableStudents = [];
function showStudents() {
  let studentsDiv = document.getElementById("students-div");
 
  studentsDiv.innerHTML = "";
  for (i = 0; i < 10; i++) {
    {
      let studentCard = document.createElement("div");
      let randNum;
      randNum = Math.floor(Math.random() * 101);
      console.log(randNum);

      let randColorNum;
      randColorNum = Math.floor(Math.random() * 999);

      studentCard.style.backgroundColor = "#" + randColorNum;

      let studentImg = document.createElement("img");
      studentImg.src = studentsArray[randNum].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = studentsArray[randNum].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = studentsArray[randNum].house;

      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "delete";
      deleteBtn.addEventListener("click", deleteStudent);

      studentCard.append(studentImg, studentName, studentHouse, deleteBtn);
      studentsDiv.append(studentCard);
      visableStudents.push(studentCard);
    }
  }
}
console.log(visableStudents);
function deleteStudent(randNum) {
  var areYouSure = prompt("Are you sure? yes/no ");
  if (areYouSure == "yes") {
    visableStudents.splice([randNum], 1);
    console.log(visableStudents);

    for (i = 0; i < 1; i++) {
      let studentsDiv = document.getElementById("students-div");
      let studentCard = document.createElement("div");
      let randNum;
      randNum = Math.floor(Math.random() * 101);
      console.log(randNum);

      let randColorNum;
      randColorNum = Math.floor(Math.random() * 999);

      studentCard.style.backgroundColor = "#" + randColorNum;

      let studentImg = document.createElement("img");
      studentImg.src = studentsArray[randNum].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = studentsArray[randNum].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = studentsArray[randNum].house;

      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "delete";
      deleteBtn.addEventListener("click", deleteStudent);

      studentCard.append(studentImg, studentName, studentHouse, deleteBtn);
      studentsDiv.append(studentCard);
      visableStudents.push(studentCard);
    }
  } else {
    console.log("nothing happens");
  }
}
