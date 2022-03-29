let snapeDiv = document.getElementById("snape-div");

async function getHpApi(url) {
  const infoGather = await fetch(url);
  const jsonData = await infoGather.json();
  return jsonData;
}

const severusInfo = document.createElement("button");
severusInfo.innerText = "Severus Snape info";
document.body.append(severusInfo);
severusInfo.addEventListener("click", () =>
  getHpApi("http://hp-api.herokuapp.com/api/characters").then((jsonData) => {
    console.log(jsonData[7]);
  })
);
