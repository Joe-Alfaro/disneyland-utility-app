const themeparks = require('themeparks');
let attractions = [];
let attraction = {};
const disneyland = new themeparks.Parks.DisneylandResortMagicKingdom();


exports.seed = async (knex, Promise) => {
await disneyland.GetWaitTimes()
  .then(rides => {
    rides.map(ride => {
      attraction = {
        id: ride.id,
        name: ride.name,
        status: ride.status,
        fastPass: ride.fastPass,
        waitTime: ride.waitTime
      };
    attractions.push(attraction);
    })
  })
  await knex('rides').truncate()
    .then(() => {
      console.log(attractions)
      return knex('rides').insert(attractions)
    })
};
