function updateTime() {
  let munichComponent = document.querySelector("#munich");
  if (munichComponent) {
    let munichDateComponent = munichComponent.querySelector(".date");
    let munichTimeComponent = munichComponent.querySelector(".time");
    munichTime = moment().tz("Europe/Berlin");

    munichDateComponent.innerHTML = munichTime.format("MMMM Do YYYY");
    munichTimeComponent.innerHTML = munichTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
  let seattleComponent = document.querySelector("#seattle");
  if (seattleComponent) {
    let seattleDateComponent = seattleComponent.querySelector(".date");
    let seattleTimeComponent = seattleComponent.querySelector(".time");
    seattleTime = moment().tz("US/Pacific");

    seattleDateComponent.innerHTML = seattleTime.format("MMMM Do YYYY");
    seattleTimeComponent.innerHTML = seattleTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesComponent = document.querySelector("#cities");
  citiesComponent.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectOption = document.querySelector("#city");

citiesSelectOption.addEventListener("change", updateCity);
