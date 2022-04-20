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
      studentAge.innerHTML = jsonData[i].yearOfBirth;

      studentCard.append(studentImg, studentName, studentHouse, studentAge);
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
      studentAge.innerHTML = jsonData[i].yearOfBirth;

      studentCard.append(studentImg, studentName, studentHouse, studentAge);
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
      studentAge.innerHTML = jsonData[i].yearOfBirth;

      studentCard.append(studentImg, studentName, studentHouse, studentAge);
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
      studentAge.innerHTML = jsonData[i].yearOfBirth;

      studentCard.append(studentImg, studentName, studentHouse, studentAge);
      hufflepuffDiv.append(studentCard);
    } else {
      console.log("nothing happens");
    }
  }
}
