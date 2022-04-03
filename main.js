//hour
//if hour is between 1am to 12am: goodmorning
//if hour is between 12am to 6pm: goodafternoon
//if hour is between 6pm to 12pm: goodevening

let hour = parseInt(prompt("pick hour"));

function currentHour() {
  if (hour >= 1 && hour < 12) {
    return "goodmorning";
  } else if (hour >= 12 && hour < 18) {
    return "goodafternoon";
  } else {
    return "goodnight";
  }
}

console.log(currentHour());
