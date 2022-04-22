let creatorBtn = document.getElementById("creator-btn");
creatorBtn.addEventListener("click", createStudent);

function createStudent() {
  let namePrompt = prompt("What is your name ?");
  let housePrompt = prompt(
    "Which house do you belong in? (Remember first letter Capital)"
  );
  let agePrompt = prompt("When were you born?");
  let alivePrompt = prompt("Are you alive? true/false");
  if (alivePrompt === "true") {
    alivePrompt = true;
  } else {
    alivePrompt = false;
  }
  let newStudent = {
    img: "",
    name: namePrompt,
    house: housePrompt,
    yearOfBirth: agePrompt,
    alive: alivePrompt,
  };
  if (newStudent.name === "") {
    alert("name missing");
  } else if (newStudent.house === "") {
    alert("house missing");
  } else if (newStudent.yearOfBirth === "") {
    alert("year of birth missing");
  } else if (newStudent.alive === "") {
    alert("alive true/false missing");
  } else if (newStudent.house === "Gryffindor") {
    gryffindorArray.push(newStudent);
    console.log(newStudent);
  } else if (newStudent.house === "Slytherin") {
    slytherinArray.push(newStudent);
  } else if (newStudent.house === "Ravenclaw") {
    ravenclawArray.push(newStudent);
  } else if (newStudent.house === "Hufflepuff") {
    hufflepuffArray.push(newStudent);
  } else {
    alert(
      "You chose a house wich is not there, google Harry Potter Houses for more info"
    );
  }
}

let houseGryffindor = document.getElementById("house-gryffindor");
let gryffindorImg = document.getElementById("gryffindor-img");
let gryffindorArray = [];

async function getHpApiGryffindor(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  jsonData.forEach((character) => {
    gryffindorArray.push(character);
  });
}
gryffindorImg.addEventListener("click", () =>
  getHpApiGryffindor(
    "http://hp-api.herokuapp.com/api/characters/students"
  ).then((jsonData) => {
    addStudentsGryffindor(jsonData);
  })
);
function addStudentsGryffindor() {
  let gryffindorDiv = document.getElementById("gryffindor-div");
  gryffindorDiv.innerHTML = "";
  for (let i = 0; i < gryffindorArray.length; i++) {
    if (gryffindorArray[i].house == "Gryffindor") {
      let studentCard = document.createElement("div");
      studentCard.setAttribute("id", `House-` + gryffindorArray[i].house);
      studentCard.setAttribute("class", "students__house__wrapper");

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
        if (gryffindorArray[i].alive === true) {
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
    } else {
      console.log("nothing happens");
    }
  }
}

let houseSlytherin = document.getElementById("house-slytherin");
let slytherinImg = document.getElementById("slytherin-img");
let slytherinArray = [];

async function getHpApiSlytherin(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  jsonData.forEach((character) => {
    slytherinArray.push(character);
  });
}

slytherinImg.addEventListener("click", () =>
  getHpApiSlytherin("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      addStudentsSlytherin(jsonData);
    }
  )
);
function addStudentsSlytherin() {
  let slytherinDiv = document.getElementById("slytherin-div");
  slytherinDiv.innerHTML = "";
  for (let i = 0; i < slytherinArray.length; i++) {
    if (slytherinArray[i].house == "Slytherin") {
      let studentCard = document.createElement("div");
      studentCard.setAttribute("id", `House-` + slytherinArray[i].house);
      studentCard.setAttribute("class", "students__house__wrapper");
      let studentImg = document.createElement("img");
      studentImg.src = slytherinArray[i].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = slytherinArray[i].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = slytherinArray[i].house;
      let studentAge = document.createElement("p");
      ageTest();
      function ageTest() {
        if (slytherinArray[i].alive == false) {
          console.log("no age is shown cause of death");
        } else if (slytherinArray[i].yearOfBirth == "") {
          studentAge.innerHTML = "unknown";
        } else {
          studentAge.innerHTML = 2022 - slytherinArray[i].yearOfBirth;
        }
      }
      let studentAlive = document.createElement("p");
      aliveTest();
      function aliveTest() {
        if (slytherinArray[i].alive == true) {
          studentAlive.innerHTML = "Is alive";
        } else {
          console.log(slytherinArray[i].alive);
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
let ravenclawArray = [];

async function getHpApiRavenclaw(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  jsonData.forEach((character) => {
    ravenclawArray.push(character);
  });
}

ravenclawImg.addEventListener("click", () =>
  getHpApiRavenclaw("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      addStudentsRavenclaw(jsonData);
    }
  )
);
function addStudentsRavenclaw() {
  let ravenclawDiv = document.getElementById("ravenclaw-div");
  ravenclawDiv.innerHTML = "";
  for (let i = 0; i < ravenclawArray.length; i++) {
    if (ravenclawArray[i].house == "Ravenclaw") {
      let studentCard = document.createElement("div");
      studentCard.setAttribute("id", `House-` + ravenclawArray[i].house);
      studentCard.setAttribute("class", "students__house__wrapper");
      let studentImg = document.createElement("img");
      studentImg.src = ravenclawArray[i].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = ravenclawArray[i].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = ravenclawArray[i].house;
      let studentAge = document.createElement("p");
      ageTest();
      function ageTest() {
        if (ravenclawArray[i].alive == false) {
          console.log("no age is shown cause of death");
        } else if (ravenclawArray[i].yearOfBirth == "") {
          studentAge.innerHTML = "unknown";
        } else {
          studentAge.innerHTML = 2022 - ravenclawArray[i].yearOfBirth;
        }
      }
      let studentAlive = document.createElement("p");
      aliveTest();
      function aliveTest() {
        if (ravenclawArray[i].alive == true) {
          studentAlive.innerHTML = "Is alive";
        } else {
          console.log(ravenclawArray[i].alive);
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
let hufflepuffArray = [];

async function getHpApiHufflepuff(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  jsonData.forEach((character) => {
    hufflepuffArray.push(character);
  });
}

hufflepuffImg.addEventListener("click", () =>
  getHpApiHufflepuff(
    "http://hp-api.herokuapp.com/api/characters/students"
  ).then((jsonData) => {
    addStudentsHufflepuff(jsonData);
  })
);
function addStudentsHufflepuff() {
  let hufflepuffDiv = document.getElementById("hufflepuff-div");
  hufflepuffDiv.innerHTML = "";
  for (let i = 0; i < hufflepuffArray.length; i++) {
    if (hufflepuffArray[i].house == "Hufflepuff") {
      let studentCard = document.createElement("div");
      studentCard.setAttribute("id", `House-` + hufflepuffArray[i].house);
      studentCard.setAttribute("class", "students__house__wrapper");
      let studentImg = document.createElement("img");
      studentImg.src = hufflepuffArray[i].image;
      studentImg.addEventListener("error", errorImage);
      function errorImage() {
        studentImg.src = "/images/wizard.png";
      }
      let studentName = document.createElement("h3");
      studentName.innerHTML = hufflepuffArray[i].name;
      let studentHouse = document.createElement("p");
      studentHouse.innerHTML = hufflepuffArray[i].house;
      let studentAge = document.createElement("p");
      ageTest();
      function ageTest() {
        if (hufflepuffArray[i].alive == false) {
          console.log("no age is shown cause of death");
        } else if (hufflepuffArray[i].yearOfBirth == "") {
          studentAge.innerHTML = "unknown";
        } else {
          studentAge.innerHTML = 2022 - hufflepuffArray[i].yearOfBirth;
        }
      }
      let studentAlive = document.createElement("p");
      aliveTest();
      function aliveTest() {
        if (hufflepuffArray[i].alive == true) {
          studentAlive.innerHTML = "Is alive";
        } else {
          console.log(hufflepuffArray[i].alive);
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
            <li class="student" id="${`House-` + student.house}">
            <img src="${
              student.image
            }"onerror="this.src='/images/wizard.png'"></img>
                <h3>${student.name}</h3>
                <p> ${student.house}</p>
            </li>
        `;
    })
    .join("");
  studentsList.innerHTML = htmlString;
};

loadStudents();
