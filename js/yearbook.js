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

let studentCardTemplate = document.querySelector("[data-student-template]");
let studentCardContainer = document.querySelector("[data-student-cards-container]");
let searchInput = document.querySelector("[data-search]");


let students = [];

searchInput.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();
  students.forEach((student) => {
    let isVisable =
      student.name.toLowerCase().includes(value) ||
      student.house.toLowerCase().includes(value);
    student.element.classList.toggle("show", !isVisable);
  });
});

fetch("http://hp-api.herokuapp.com/api/characters/students")
  .then((res) => res.json())
  .then((data) => {
    students = data.map((student) => {
      let card = studentCardTemplate.content.cloneNode(true).children[0];
      let studentImg = card.querySelector("[data-img]");
      let studentName = card.querySelector("[data-name]");
      let studentHouse = card.querySelector("[data-house]");
      let studentAge = card.querySelector("[data-age]");
      let studentAlive = card.querySelector("[data-alive]");
      studentImg.textContent = student.image;
      studentName.textContent = student.name;
      studentHouse.textContent = student.house;
      studentAge.textContent = student.yearOfBirth;
      studentAlive.textContent = student.alive;

      studentCardContainer.append(card);
      return { name: student.name, house: student.house, element: card };
    });
  });