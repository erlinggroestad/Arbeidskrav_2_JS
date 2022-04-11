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
         <img id="staff-img" src="${
           jsonData[i].image
         }" alt="" onerror="this.src='/images/wizard.png'" /> <br>

        <div id="staff-text-info" <br>
        Name:<div id="staff-name">${jsonData[i].name}</div>
        House:<div id="staff-house"> ${jsonData[i].house} 
         <div id="patronus">Patronus: ${
           jsonData[i].patronus
         } </div></div></li>`;
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
    addNewStaff();
  }

  function addNewStaff() {
    let staffCardsInfo = "";
    for (let i = 0; i < addedStaffArray.length; i++) {
      staffCardsInfo += `<li class="cards" id="${
        `House-` + addedStaffArray[i].house
      }">
         <img id="staff-img" src="" alt="" onerror="this.src='/images/wizard.png'" /> <br>

        <div id="staff-text-info" <br>
        Name:<div id="staff-name">${addedStaffArray[i].name}</div>
        House:<div id="staff-house"> ${addedStaffArray[i].house} 
         <div id="patronus">Patronus: ${
           addedStaffArray[i].patronus
         } </div></div></li>`;
    }
    document.getElementById("staff-cards").innerHTML = staffCardsInfo;
  }
  // alert(inputName);
  // alert(inputHouse);
  // alert(result);
  // for (let i = 0; i < jsonData.length; i++) {
  //   staffCardsInfo += `<li class="cards" id="${`House-` + jsonData[i].house}">
  //        <img id="staff-img" src="" alt="" onerror="this.src='/images/wizard.png'" /> <br>
  //       <div id="staff-text-info" <br>
  //       Name:<div id="staff-name">${jsonData[i].name}</div>
  //       House:<div id="staff-house"> ${jsonData[i].house}
  //        <div id="patronus">Patronus: ${
  //          jsonData[i].patronus
  //        } </div></div></li>`;
  // }
}
