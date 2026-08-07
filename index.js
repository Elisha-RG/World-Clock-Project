function updateTime() {
  let munichComponent = document.querySelector("#munich");
  let munichDateComponent = munichComponent.querySelector(".date");
  let munichTimeComponent = munichComponent.querySelector(".time");
  munichTime = moment().tz("Europe/Berlin");

  munichDateComponent.innerHTML = munichTime.format("MMMM Do YYYY");
  munichTimeComponent.innerHTML = munichTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );

  let seattleComponent = document.querySelector("#seattle");
  let seattleDateComponent = seattleComponent.querySelector(".date");
  let seattleTimeComponent = seattleComponent.querySelector(".time");
  seattleTime = moment().tz("US/Pacific");

  seattleDateComponent.innerHTML = seattleTime.format("MMMM Do YYYY");
  seattleTimeComponent.innerHTML = seattleTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

updateTime();
setInterval(updateTime, 1000);
