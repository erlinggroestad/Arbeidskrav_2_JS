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
      showStudentsGryffindor(jsonData);
    }
  )
);
function showStudentsGryffindor(jsonData) {
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
      showStudentsSlytherin(jsonData);
    }
  )
);
function showStudentsSlytherin(jsonData) {
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
      showStudentsRavenclaw(jsonData);
    }
  )
);
function showStudentsRavenclaw(jsonData) {
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
      showStudentsHufflepuff(jsonData);
    }
  )
);
function showStudentsHufflepuff(jsonData) {
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].house == "Hufflepuff") {
      console.log(jsonData[i]);
    } else {
      console.log("nothing happens");
    }
  }
}
