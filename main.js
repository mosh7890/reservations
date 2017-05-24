var reservations = {
  'bob': { claimed: false },
  'ted': { claimed: true }
}

document.getElementById("button1").onclick = function () {
  var x = document.forms["form1"];
  name = x.elements[0].value.toLowerCase();

  var claimReservation = function () {
    if (name in reservations) {
      if (reservations[name]['claimed']) {
        alert("Your spot has been taken.")
      }
      else {
        reservations[name].claimed = true;
        alert("Welcome!");
      }
    }
    else {
      reservations[name] = { claimed: true };
      alert("A table has opened up, Welcome!");
    }
  }

  claimReservation();
}


