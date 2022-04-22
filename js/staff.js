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
  let staffCardsInfo = "";
  for (let i = 0; i < staffArray.length; i++) {
    staffCardsInfo += `<li class="cards" id="${`House-` + staffArray[i].house}">
        <div id="cards__container">
        <button type="submit" id="edit-button" onclick="editFunc()">Edit</button>
        <button type="submit" id="end-editing">Done</button> <br>
 
        <button onclick="deleteStaff(${i})"> Delete me </button> <br>
        <img id="staff-img" src="${
          staffArray[i].image
        }" alt="" onerror="this.src='/images/wizard.png'" /> <br>

        <div id="staff-text-info" <br>
        Name: <div id="staff-name">    ${staffArray[i].name}</div>
        House: <div id="staff-house"  ${staffArray[i].house}</div>
        <div id="patronus">Patronus:<div id="change__patronus">${
          staffArray[i].patronus
        }</div>
        </div></li>`;
  }

  document.getElementById("staff-cards").innerHTML = staffCardsInfo;
}

function editFunc() {
  const editStaffName = document.getElementById("staff-name");
  const editStaffHouse = document.getElementById("staff-house");
  const editStaffPatronus = document.getElementById("change__patronus");

  const edit_button = document.getElementById("edit-button");
  const end_button = document.getElementById("end-editing");

  edit_button.addEventListener("click", function () {
    editStaffName.contentEditable = true;
    editStaffHouse.contentEditable = true;
    editStaffPatronus.contentEditable = true;

    editStaffName.style.backgroundColor = "#C4A484";
    editStaffHouse.style.backgroundColor = "#C4A484";
    editStaffPatronus.style.backgroundColor = "#C4A484";
  });

  end_button.addEventListener("click", function () {
    editStaffName.contentEditable = false;
    editStaffHouse.contentEditable = false;
    editStaffPatronus.contentEditable = false;

    editStaffName.style.backgroundColor = null;
    editStaffHouse.style.backgroundColor = null;
    editStaffPatronus.style.backgroundColor = null;
  });
  console.log(edit_button);
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
