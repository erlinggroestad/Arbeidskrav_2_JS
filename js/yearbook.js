let gryffindorBtn = document.getElementById("gryffindor-btn")

async function getHpApi(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  return jsonData;
}
gryffindorBtn.addEventListener("click", () =>
  getHpApi("http://hp-api.herokuapp.com/api/characters/students").then(
    (jsonData) => {
      showStudents(jsonData);
    }
  )
);
function showStudents(jsonData){
    console.log(jsonData)
}