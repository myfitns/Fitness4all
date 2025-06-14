function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    document.getElementById("auth").classList.add("hidden");
    document.getElementById("userdata").classList.remove("hidden");
  } else {
    alert("Bitte Benutzername und Passwort eingeben.");
  }
}

function generatePlan() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const gender = document.getElementById("gender").value;
  const restDays = parseInt(document.getElementById("restDays").value);
  const goals = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(cb => cb.value);

  if (!height || !weight || !gender || goals.length === 0) {
    alert("Bitte alle Felder ausfüllen.");
    return;
  }

  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";
  const totalDays = 42;
  let trainingDay = 0;

  for (let i = 1; i <= totalDays; i++) {
    const div = document.createElement("div");
    div.classList.add("day");

    if (i % Math.floor(7 / (7 - restDays)) === 0) {
      div.innerText = `Tag ${i}: Ruhetag`;
    } else {
      trainingDay++;
      div.innerHTML = `Tag ${i}: Workout - ${goals.join(", ")}<br>
        <img src="https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif" width="100"/>`;
    }

    calendar.appendChild(div);
  }

  document.getElementById("userdata").classList.add("hidden");
  document.getElementById("trainingPlan").classList.remove("hidden");
}

function extendPlan() {
  const calendar = document.getElementById("calendar");
  const currentDays = calendar.children.length;

  for (let i = 1; i <= 7; i++) {
    const div = document.createElement("div");
    div.classList.add("day");
    div.innerText = `Zusätzlicher Tag ${currentDays + i}: Workout oder Ruhetag`;
    calendar.appendChild(div);
  }
}