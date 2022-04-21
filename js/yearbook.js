let creatorBtn = document.getElementById("creator-btn");
creatorBtn.addEventListener("click", createStudent);

function createStudent() {
  let namePrompt = prompt("What is your name ?");
  let housePrompt = prompt("Which house do you belong in?");
  let agePrompt = prompt("When were you born?");
  let alivePrompt = prompt("Are you alive? true/false");
  let newStudent = {
    img: "",
    name: namePrompt,
    house: housePrompt,
    yearOfBirth: agePrompt,
    alive: alivePrompt,
  };
  console.log(newStudent);
  gryffindorArray.push(newStudent);
}

let houseGryffindor = document.getElementById("house-gryffindor");
let gryffindorImg = document.getElementById("gryffindor-img");
let gryffindorArray = [];

async function getHpApi(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  jsonData.forEach((character) => {
    gryffindorArray.push(character);
  });
}
gryffindorImg.addEventListener("click", () =>
  getHpApi("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      addStudentsGryffindor(jsonData);
    }
  )
);
function addStudentsGryffindor(jsonData) {
  let gryffindorDiv = document.getElementById("gryffindor-div");
  gryffindorDiv.innerHTML = "";
  for (let i = 0; i < gryffindorArray.length; i++) {
    if (gryffindorArray[i].house == "Gryffindor") {
      let studentCard = document.createElement("div");
      let studentImg = document.createElement("img");
      studentImg.src = gryffindorArray[i].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = gryffindorArray[i].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = gryffindorArray[i].house;
      let studentAge = document.createElement("p");
      ageTest();
      function ageTest() {
        if (gryffindorArray[i].alive == false) {
          console.log("no age is shown cause of death");
        } else if (gryffindorArray[i].yearOfBirth == "") {
          studentAge.innerHTML = "unknown";
        } else {
          studentAge.innerHTML = 2022 - gryffindorArray[i].yearOfBirth;
        }
      }
      let studentAlive = document.createElement("p");
      aliveTest();
      function aliveTest() {
        if (gryffindorArray[i].alive == true) {
          studentAlive.innerHTML = "Is alive";
        } else {
          console.log(gryffindorArray[i].alive);
          studentCard.style.color = "red";
        }
      }
      studentCard.append(
        studentImg,
        studentName,
        studentHouse,
        studentAge,
        studentAlive
      );
      gryffindorDiv.append(studentCard);
      console.log(gryffindorArray);
    } else {
      console.log("nothing happens");
    }
  }
}

let houseSlytherin = document.getElementById("house-slytherin");
let slytherinImg = document.getElementById("slytherin-img");

slytherinImg.addEventListener("click", () =>
  getHpApi("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      addStudentsSlytherin(jsonData);
    }
  )
);
function addStudentsSlytherin(jsonData) {
  let slytherinDiv = document.getElementById("slytherin-div");
  slytherinDiv.innerHTML = "";
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Slytherin") {
      let studentCard = document.createElement("div");
      let studentImg = document.createElement("img");
      studentImg.src = jsonData[i].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = jsonData[i].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = jsonData[i].house;
      let studentAge = document.createElement("p");
      ageTest();
      function ageTest() {
        if (jsonData[i].alive == false) {
          console.log("no age is shown cause of death");
        } else if (jsonData[i].yearOfBirth == "") {
          studentAge.innerHTML = "unknown";
        } else {
          studentAge.innerHTML = 2022 - jsonData[i].yearOfBirth;
        }
      }
      let studentAlive = document.createElement("p");
      aliveTest();
      function aliveTest() {
        if (jsonData[i].alive == true) {
          studentAlive.innerHTML = "Is alive";
        } else {
          console.log(jsonData[i].alive);
          studentCard.style.color = "red";
        }
      }
      studentCard.append(
        studentImg,
        studentName,
        studentHouse,
        studentAge,
        studentAlive
      );
      slytherinDiv.append(studentCard);
    } else {
      console.log("nothing happens");
    }
  }
}

let houseRavenclaw = document.getElementById("house-ravenclaw");
let ravenclawImg = document.getElementById("ravenclaw-img");

ravenclawImg.addEventListener("click", () =>
  getHpApi("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      addStudentsRavenclaw(jsonData);
    }
  )
);
function addStudentsRavenclaw(jsonData) {
  let ravenclawDiv = document.getElementById("ravenclaw-div");
  ravenclawDiv.innerHTML = "";
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Ravenclaw") {
      let studentCard = document.createElement("div");
      let studentImg = document.createElement("img");
      studentImg.src = jsonData[i].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = jsonData[i].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = jsonData[i].house;
      let studentAge = document.createElement("p");
      ageTest();
      function ageTest() {
        if (jsonData[i].alive == false) {
          console.log("no age is shown cause of death");
        } else if (jsonData[i].yearOfBirth == "") {
          studentAge.innerHTML = "unknown";
        } else {
          studentAge.innerHTML = 2022 - jsonData[i].yearOfBirth;
        }
      }
      let studentAlive = document.createElement("p");
      aliveTest();
      function aliveTest() {
        if (jsonData[i].alive == true) {
          studentAlive.innerHTML = "Is alive";
        } else {
          console.log(jsonData[i].alive);
          studentCard.style.color = "red";
        }
      }
      studentCard.append(
        studentImg,
        studentName,
        studentHouse,
        studentAge,
        studentAlive
      );
      ravenclawDiv.append(studentCard);
    } else {
      console.log("nothing happens");
    }
  }
}

let houseHufflepuff = document.getElementById("house-hufflepuff");
let hufflepuffImg = document.getElementById("hufflepuff-img");

hufflepuffImg.addEventListener("click", () =>
  getHpApi("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      addStudentsHufflepuff(jsonData);
    }
  )
);
function addStudentsHufflepuff(jsonData) {
  let hufflepuffDiv = document.getElementById("hufflepuff-div");
  hufflepuffDiv.innerHTML = "";
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Hufflepuff") {
      let studentCard = document.createElement("div");
      let studentImg = document.createElement("img");
      studentImg.src = jsonData[i].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = jsonData[i].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = jsonData[i].house;
      let studentAge = document.createElement("p");
      ageTest();
      function ageTest() {
        if (jsonData[i].alive == false) {
          console.log("no age is shown cause of death");
        } else if (jsonData[i].yearOfBirth == "") {
          studentAge.innerHTML = "unknown";
        } else {
          studentAge.innerHTML = 2022 - jsonData[i].yearOfBirth;
        }
      }
      let studentAlive = document.createElement("p");
      aliveTest();
      function aliveTest() {
        if (jsonData[i].alive == true) {
          studentAlive.innerHTML = "Is alive";
        } else {
          console.log(jsonData[i].alive);
          studentCard.style.color = "red";
        }
      }
      studentCard.append(
        studentImg,
        studentName,
        studentHouse,
        studentAge,
        studentAlive
      );
      hufflepuffDiv.append(studentCard);
    } else {
      console.log("nothing happens");
    }
  }
}

const studentsList = document.getElementById("students-list");
const searchBar = document.getElementById("search-bar");
let students = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchString) ||
      student.house.toLowerCase().includes(searchString)
    );
  });
  displayStudents(filteredStudents);
});

let loadStudents = async () => {
  try {
    let res = await fetch(
      "http://hp-api.herokuapp.com/api/characters/students"
    );
    students = await res.json();
    displayStudents(students);
  } catch (err) {
    console.error(err);
  }
};

let displayStudents = (students) => {
  let htmlString = students
    .map((student) => {
      return `
            <li class="student">
            <img src="${student.image}"></img>
                <h3>${student.name}</h3>
                <p> ${student.house}</p>
            </li>
        `;
    })
    .join("");
  studentsList.innerHTML = htmlString;
};

loadStudents();
