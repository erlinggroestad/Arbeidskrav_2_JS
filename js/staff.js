async function getStaffApi(url) {
  let infoGather = await fetch(url);
  let jsonData = await infoGather.json();
  return jsonData;
}
fetch("http://hp-api.herokuapp.com/api/characters/staff").then(
  getStaffApi("http://hp-api.herokuapp.com/api/characters/staff").then(
    (jsonData) => {
      console.log(jsonData);
      document.getElementById("staff-name").innerHTML = jsonData[0].name;
      document.getElementById("staff-house").innerHTML = jsonData[0].house;
      document.getElementById("staff-img").src = jsonData[0].image;
    }
  )
);
