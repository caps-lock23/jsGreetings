//hour
//if hour is between 1am to 12am: goodmorning
//if hour is between 12am to 6pm: goodafternoon
//if hour is between 6pm to 12pm: goodevening

let hour = parseInt(prompt("pick hour"))

function currentHour() {
	if (hour >= 1 && hour < 12) {
  console.log("goodmorning");
} else if (hour >= 12 && hour < 18) {
  console.log("goodafternoon");
} else {
  console.log("goodevening")
}
}

currentHour()

