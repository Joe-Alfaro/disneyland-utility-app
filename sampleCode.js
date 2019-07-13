// include the Themeparks library
const Themeparks = require("themeparks");

// list all the parks supported by the library
//for(let park in Themeparks.Parks){
//    console.log("* " + new Themeparks.Parks[park]().Name + " (DisneyAPI." + park + ")");
//}

// access a specific park
const disneyland = new Themeparks.Parks.DisneylandResortMagicKingdom();

// access wait times by Promise
disneyland.GetWaitTimes()
  .then(rides => {
     
    for(let i = 0, ride; ride = rides[i++];) {
      ride.status !== 'Closed' && ride.fastPass === true
        ? console.log(`${ride.name}: `, ride)
        : null
    }
  })
  .catch(error => {
    console.log(error)
  });

  disneyland.FindRideObject('DisneylandResortMagicKingdom_353347').then(ride => console.log(ride))

// get park opening times
//disneyland.GetOpeningTimes().then(function(times) {
    // print opening times
//    for(var i=0, time; time=times[i++];) {
//        if (time.type == "Operating") {
//            console.log("[" + time.date + "] Open from " + time.openingTime + " until " + time.closingTime);
//        }
//    }
//}, console.error);
