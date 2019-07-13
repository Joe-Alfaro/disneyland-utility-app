const Themeparks = require("themeparks");
const db = require('../data/dbConfig');

const Disneyland = new Themeparks.Parks.DisneylandResortMagicKingdom();

const getAll = async () => await db('rides');

const updateRide = async ({id, waitTime, status}) => (
  await db('rides')
    .where({id})
    .update({waitTime, status})
    .catch(error => console.log('updateRide: ', error))
);

const checkWaitTimes = async () => {
  const rideTimes = await Disneyland.GetWaitTimes()
  rideTimes.forEach(ride => {
    updateRide({id: ride.id,status: ride.status,waitTime: ride.waitTime})
  })
};

module.exports = {
  getAll,
  checkWaitTimes
};
