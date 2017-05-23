var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  if (name in reservations) {
    if (reservations[name]['claimed']) {
      alert("Your Spot Has Been Taken.")
    }
    else {
      alert("Welcome!");
    }
  }
  else {
    alert("You Have No Reservation");
  }
}

claimReservation();