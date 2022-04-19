let createStaffBtn = document.getElementById("create-staff-btn");

async function getStaffApi(url) {
  let infoGather = await fetch(url);
  let jsonData = await infoGather.json();
  return jsonData;
}

fetch("http://hp-api.herokuapp.com/api/characters/staff").then(
  getStaffApi("http://hp-api.herokuapp.com/api/characters/staff").then(
    (jsonData) => {
      console.log(jsonData);

      let staffCardsInfo = "";

      for (let i = 0; i < jsonData.length; i++) {
        staffCardsInfo += `<li class="cards" ${jsonData[i].name}  id="${
          `House-` + jsonData[i].house
        }">
        <div id="cards__container">
        <button type="submit" id="edit-button" onclick="editFunc()">Edit</button>
        <button type="submit" id="end-editing">Done</button> <br>
 
        <button onclick="deleteStaff()"> Delete me </button> <br>
        <img id="staff-img" src="${
          jsonData[i].image
        }" alt="" onerror="this.src='/images/wizard.png'" /> <br>

        <div id="staff-text-info" <br>
        Name: <div id="staff-name">    ${jsonData[i].name}</div>
        House: <div id="staff-house">   ${jsonData[i].house}</div>
        Patronus: <div id="patronus"> ${jsonData[i].patronus}</div>
        </div></li>`;
      }
      document.getElementById("staff-cards").innerHTML = staffCardsInfo;
    }
  )
);

// Trenger å fikse edit på alle ansatte og slette funksjon
addedStaffArray = [];

function addStaff() {
  let inputName = document.getElementById("select-name").value;
  let inputPatronus = document.getElementById("select-patronus").value;
  let result = document.getElementById("select").value;

  if ((inputName, inputPatronus === "")) {
    alert("Feltene over kan ikke være tomme");
  } else {
    addedStaffArray.push({
      name: inputName,
      patronus: inputPatronus,
      house: result,
    });
    addedStaffCards();
  }

  function addedStaffCards() {
    let staffCardsInfo = "";
    for (let i = 0; i < addedStaffArray.length; i++) {
      staffCardsInfo += `<li class="cards" id="${
        `House-` + addedStaffArray[i].house
      }">
        <div id="cards__container">
        <button type="submit" id="edit-button">Edit</button>
        <button type="submit" id="end-editing">Done</button><br>

        <button onclick="deleteStaff()"> Delete me </button> <br>
        <img id="staff-img" src="" alt="" onerror="this.src='/images/wizard.png'" /> <br>

        <div id="staff-text-info" <br>
        Name: <div id="staff-name">    ${addedStaffArray[i].name}</div>
        House: <div id="staff-house">   ${addedStaffArray[i].house}</div>
        Patronus: <div id="patronus"> ${addedStaffArray[i].patronus}</div>
        </div></li>`;
    }
    document.getElementById("staff-cards").innerHTML = staffCardsInfo;
   
  }
}

function deleteStaff(i) {
  let confirmDelete = prompt("Are you sure you want too delete? yes/no");
  if (confirmDelete == "yes") {
    addedStaffArray.splice(i, 1);
  }
}

function editFunc() {
  const editStaffName = document.getElementById("staff-name");
  const editStaffHouse = document.getElementById("staff-house");
  const editStaffPatronus = document.getElementById("patronus");

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
}

console.log(addedStaffArray);

// Edit funker bare på første cardet, i cardsa fra apiet og de man lager.
// Splice sletter fra addedstaffarrayet men kun første posisjonen... selvom skrevet i, 1
