let counter = document.querySelector("#counter");

function ramzanCounter() {
  let currentDate = new Date().getTime();
  let ramzanDate = new Date("11 Mar 2024").getTime();
  let diff = ramzanDate - currentDate;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let remainingHours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let remainingMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let remainingSeconds = Math.floor((diff % (1000 * 60)) / 1000);

  counter.innerHTML = `<p>${days} </br> <span id="span">Days</span></p>
                     <p>${remainingHours} </br> <span id="span">Hours</span></p>
                     <p>${remainingMinutes} </br> <span id="span">Minutes</span></p>
                     <p>${remainingSeconds} </br> <span id="span">Seconds</span></p>`;
  if (
    days == 0 &&
    remainingHours === 0 &&
    remainingMinutes === 0 &&
    remainingSeconds === 0
  ) {
    counter.innerHTML = `<h1>Ramazan Mubarak</h1>`;
  }
}
setInterval(ramzanCounter, 1000);
