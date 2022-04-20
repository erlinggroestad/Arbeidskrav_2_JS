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
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Gryffindor") {
      console.log(jsonData[i]);
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
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Slytherin") {
      console.log(jsonData[i]);
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
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Ravenclaw") {
      console.log(jsonData[i]);
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
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Hufflepuff") {
      console.log(jsonData[i]);
    } else {
      console.log("nothing happens");
    }
  }
}
