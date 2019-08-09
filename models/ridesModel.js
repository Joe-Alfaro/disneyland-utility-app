const moment = require('moment')
const Themeparks = require("themeparks");

const Disneyland = new Themeparks.Parks.DisneylandResortMagicKingdom();


const getAll = () => db('rides');

const updateWaitTimes = async () => {
  const rideTimes = await Disneyland.GetWaitTimes();
  rideTimes.forEach(async ride => {
    const { id, status, waitTime } = ride;
    let { fastPassStartTime, fastPassEndTime } = ride.meta;
    if(!fastPassStartTime){
      fastPassStartTime = '23:59:59';
      fastPassEndTime = '23:59:59';
    };
    await db('rides')
      .where({id})
      .update({waitTime, status, fastPassStartTime, fastPassEndTime})
      .catch(error => console.log('updateRide: ', error))
  });
};

module.exports = {
  getAll,
  updateWaitTimes
};
