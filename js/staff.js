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
        staffCardsInfo += `<li class="cards" id="${
          `House-` + jsonData[i].house
        }">
        <button onclick="deleteStaff()"> Delete me </button> <br>
        <img id="staff-img" src="${
          jsonData[i].image
        }" alt="" onerror="this.src='/images/wizard.png'" /> <br>

        <div id="staff-text-info" <br>
        <div id="staff-name">   Name: ${jsonData[i].name}</div>
        <div id="staff-house">  House: ${jsonData[i].house}</div>
        <div id="patronus">     Patronus: ${jsonData[i].patronus}</div>
        </li>`;
      }
      document.getElementById("staff-cards").innerHTML = staffCardsInfo;
    }
  )
);
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
    let newStaffCardsInfo = "";
    for (let i = 0; i < addedStaffArray.length; i++) {
      newStaffCardsInfo += `<li class="cards" id="${
        `House-` + addedStaffArray[i].house
      }">

        <button onclick="deleteStaff()"> Delete me </button> <br>
        <img id="staff-img" src="" alt="" onerror="this.src='/images/wizard.png'" /> <br>

        <div id="staff-text-info" <br>
        <div id="staff-name">   Name: ${addedStaffArray[i].name}</div>
        <div id="staff-house">  House: ${addedStaffArray[i].house} </div>
        <div id="patronus">     Patronus: ${addedStaffArray[i].patronus}</div>
        </li>`;
    }
    document.getElementById("staff-cards").innerHTML = newStaffCardsInfo;
  }
}

// function deleteStaff(i) {
//   let confirmDelete = prompt("Are you sure you want too delete? yes/no");
//   if (confirmDelete == "yes") {
//     addedStaffArray.splice(i, 1);
//     addedStaffCards();
//   }
// }
// console.log(addedStaffArray);