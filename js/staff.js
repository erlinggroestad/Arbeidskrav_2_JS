let createStaffBtn = document.getElementById("create-staff-btn");

let staffArray = [];
console.log(staffArray, "Staff from API");

async function getStaffApi(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  jsonData.forEach((staff) => {
    staffArray.push(staff);
  });
}
function createStaffCards() {
  let staffCardUl = document.getElementById("staff-cards")
  let staffCardsInfo = "";
  for (let i = 0; i < staffArray.length; i++) {
    // staffCardsInfo += `<li class="cards" id="${`House-` + staffArray[i].house}">
    //     <div id="cards__container">
 
    //     <button onclick="deleteStaff(${i})"> Delete me </button> <br>
    //     <img id="staff-img" src="${
    //       staffArray[i].image
    //     }" alt="" onerror="this.src='/images/wizard.png'" /> <br>

    //     <div id="staff-text-info"> <br>
    //     Name: <div id="staff-name">    ${staffArray[i].name}</div>
    //     <button  id="name-button" onclick="editName(${i})">Edit Name</button> <br
    //     >
    //     House: <div id="staff-house">  ${staffArray[i].house}</div>
    //     <button  id="house-button" onclick="editHouse(${i})">Edit House</button>
    //     <div id="patronus">Patronus:<div id="change-patronus">${
    //       staffArray[i].patronus
    //     }</div>
    //     <button  id="patronus-button" onclick="editPatronus(${i})">Edit Patronus</button>
    //     </div></li>`;

let cards = document.createElement("li");
cards.setAttribute = ("id", "staffArray[i].house");
let deleteBtn = document.createElement("button");
deleteBtn.addEventListener("click",() =>  {deleteStaff(i)});
deleteBtn.innerHTML = "Delete"
let staffImg = document.createElement("img");
staffImg.src = staffArray[i].image;
staffImg.addEventListener("error", errorImage);
function errorImage() {
  staffImg.src = "/images/wizard.png";
}
let staffTextInfo = document.createElement("div");
let staffName = document.createElement("div");
staffName.innerHTML = staffArray[i].name;
let nameBtn = document.createElement("button");
nameBtn.addEventListener("click", () => {editName(i, staffName, staffHouse, staffPatronus);});
nameBtn.innerHTML = "Change name"
let staffHouse = document.createElement("div");
staffHouse.innerHTML = staffArray[i].house;
let houseBtn = document.createElement("button");
houseBtn.addEventListener("click",() =>  {editHouse(i, staffName, staffHouse, staffPatronus);});
houseBtn.innerHTML = "Change house"
let staffPatronus = document.createElement("div");
staffPatronus.innerHTML = staffArray[i].patronus;
let patronusBtn = document.createElement("button");
patronusBtn.addEventListener("click", () =>  {editPatronus(i, staffName, staffHouse, staffPatronus);});
patronusBtn.innerHTML = "Change patronus"

staffTextInfo.append(staffName, nameBtn, staffHouse, houseBtn, staffPatronus, patronusBtn)
cards.append(deleteBtn, staffImg, staffTextInfo)
staffCardUl.append(cards)
  }
}

function editName(i, staffName, staffHouse, staffPatronus) {
  let namePrompt = prompt("Do you want to change this name? yes/no");
  if (namePrompt == "yes") {
    let answerPrompt = prompt("What is the new name?");
    staffArray[i].name = answerPrompt;
   staffName.innerHTML = answerPrompt;
  } else {
    console.log(i);
    console.log(staffArray[i])
  }
}
function editHouse(i, staffName, staffHouse, staffPatronus) {
  let housePrompt = prompt("Do you want to change this name? yes/no");
  if (housePrompt == "yes") {
    let answerPrompt = prompt("What is the new name?");
    staffArray[i].house = answerPrompt;
    staffHouse.innerHTML = answerPrompt;
  } else {
    console.log(i);
  }
}
function editPatronus(i, staffName, staffHouse, staffPatronus) {
  let patronusPrompt = prompt("Do you want to change this name? yes/no");
  if (patronusPrompt == "yes") {
    let answerPrompt = prompt("What is the new name?");
    staffArray[i].patronus = answerPrompt;
    staffPatronus.innerHTML = answerPrompt;
  } else {
    console.log(i);
  }
}

fetch("http://hp-api.herokuapp.com/api/characters/staff").then(
  getStaffApi("http://hp-api.herokuapp.com/api/characters/staff").then(
    (jsonData) => {
      createStaffCards();
    }
  )
);

function deleteStaff(i) {
  let confirmDelete = prompt("Are you sure you want too delete? yes/no");
  if (confirmDelete == "yes") {
    staffArray.splice(i, 1);
  } else if (confirmDelete == "Yes") {
    staffArray.splice(i, 1);
  } else if (confirmDelete == "YES") {
    staffArray.splice(i, 1);
  }
  createStaffCards();
}

function addStaff() {
  let inputName = document.getElementById("select-name").value;
  let inputPatronus = document.getElementById("select-patronus").value;
  let result = document.getElementById("select").value;
  var areYouSure = prompt("Are you sure? yes/no ");
  if (inputName === "") {
    alert("OBS! Feltene kan ikke være tomme");
  } else if (inputPatronus === "") {
    alert("OBS! Feltene kan ikke være tomme");
  } else if (areYouSure == "yes") {
    staffArray.push({
      newName: inputName,
      newPatronus: inputPatronus,
      newHouse: result,
    });
    addedStaffCards();
  }
}

function addedStaffCards() {
  let newStaffCardsInfo = "";
  for (let i = 25; i < staffArray.length; i++) {
    newStaffCardsInfo += `<li class="cards" id="${
      `House-` + staffArray[i].newHouse
    }">
        <div id="cards__container">
        <button type="submit" id="edit-button" onclick="editFunc(${i})">Edit</button>
        <button type="submit" id="end-editing">Done</button><br>

        <button onclick="deleteStaff1(${i})"> Delete me </button> <br>
        <img id="staff-img" src="" alt="" onerror="this.src='/images/wizard.png'" /> <br>

        <div id="staff-text-info" <br>
        Name: <div id="staff-name">    ${staffArray[i].newName}</div>
        House: <div id="staff-house">   ${staffArray[i].newHouse}</div>
        <div id="patronus">Patronus:<div id="change__patronus">  ${
          staffArray[i].newPatronus
        }</div>
        </div></li>`;
  }

  document.getElementById("new__staff__cards").innerHTML = newStaffCardsInfo;
}

function deleteStaff1(i) {
  let confirmDelete = prompt("Are you sure you want too delete? yes/no");
  if (confirmDelete == "yes") {
    staffArray.splice(i, 1);
  }
  addedStaffCards();
}

// Kun edit som gjenstår
