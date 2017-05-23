var reservations = {
  'bob': { claimed: false },
  'ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation').toLowerCase();

var claimReservation = function () {
  if (name in reservations) {
    if (reservations[name]['claimed']) {
      alert("Your spot has been taken.")
    }
    else {
      alert("Welcome!");
    }
  }
  else {
    reservations[name] = { claimed: true };
    alert("A table has opened up, Welcome!");
  }
}

claimReservation();