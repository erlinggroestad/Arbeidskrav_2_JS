let houseGryffindor = document.getElementById("house-gryffindor");
let gryffindorImg = document.getElementById("gryffindor-img");

async function getHpApi(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  return jsonData;
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
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Gryffindor") {
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
      gryffindorDiv.append(studentCard);
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
                <h3>${student.name}</h3>
                <p>House: ${student.house}</p>
                <img src="${student.image}"></img>
            </li>
        `;
    })
    .join("");
  studentsList.innerHTML = htmlString;
};

loadStudents();
