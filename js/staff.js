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
      let noHouse = "hei";

      for (let i = 0; i < jsonData.length; i++) {
        staffCardsInfo += `<li>
         <img id="staff-img" src="${jsonData[i].image}" alt=""   onerror="this.src='/images/wizard.png'" /> <br>
         Name: ${jsonData[i].name} <br>
         House:${jsonData[i].house} </li>`;
      }
      document.getElementById("cards").innerHTML = staffCardsInfo;

      if (jsonData[i].house === "") {
      }
    }
  )
);
