let createStaffBtn = document.getElementById("create-staff-btn");
let cards = document.getElementById("cards");

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
         Name: ${jsonData[i].name} <br>
         House: ${jsonData[i].house} <br>
         <div id="patronus">Patronus: ${jsonData[i].patronus} </div></li>`;
        // cards.addEventListener("mouseenter", speechBubbleHover);
      }
      document.getElementById("staff-cards").innerHTML = staffCardsInfo;
    }
  )
);

function addStaff() {

}