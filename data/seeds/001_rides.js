exports.seed = async (knex, Promise) => {
  return knex('rides').del()
    .then(() => {
      return knex('rides').insert([
        {
          id: 'DisneylandResortMagicKingdom_367495', 
          name: 'Alice in Wonderland',
          waitTime: 0,
          status: 'Operating',
          fastPassStartTime: 'N/A',
          fastPassEndTime: 'N/A',
          park: 'Disneyland',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353291', 
          name: 'Astro Orbitor',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          park: 'Disneyland',
          singleRider: false 
        },
        {
          id: 'DisneylandResortMagicKingdom_353293', 
          name: 'Autopia',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          park: 'Disneyland',
          singleRider: false 
        },
        {
          id: 'DisneylandResortMagicKingdom_353295', 
          name: 'Big Thunder Mountain Railroad',
          waitTime: 0,
          status: 'Operating',
          fastPassStartTime: 'N/A',
          fastPassEndTime: 'N/A',
          park: 'Disneyland',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353301', 
          name: 'Buzz Lightyear Astro Blasters',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          park: 'Disneyland',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353305', 
          name: 'Casey Jr. Circus Train',
          waitTime: 0,
          park: 'Disneyland',
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353313', 
          name: 'Disneyland Monorail',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          park: 'Disneyland',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353315', 
          name: 'Disneyland Railroad',
          waitTime: 0,
          park: 'Disneyland',
          status: 'Operating',
          fastPassStartTime: 'N/A',
          fastPassEndTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353323', 
          name: 'Dumbo the Flying Elephant',
          park: 'Disneyland',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353327', 
          name: 'Finding Nemo Submarine Voyage',
          park: 'Disneyland',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353337', 
          name: 'Gadget\'s Go Coaster',
          park: 'Disneyland',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353347', 
          name: 'Haunted Mansion',
          park: 'Disneyland',
          waitTime: 0,
          fastPassEndTime: 'N/A',
          status: 'Operating',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353435', 
          name: 'Space Mountain',
          waitTime: 0,
          fastPassEndTime: 'N/A',
          status: 'Operating',
          park: 'Disneyland',
          fastPassStartTime: 'N/A',
          singleRider: true
        },
        {
          id: 'DisneylandResortMagicKingdom_353355', 
          name: 'Indiana Jones Adventure',
          waitTime: 0,
          status: 'Operating',
          fastPassStartTime: 'N/A',
          fastPassEndTime: 'N/A',
          park: 'Disneyland',
          singleRider: true
        },
        {
          id: 'DisneylandResortMagicKingdom_353363', 
          name: 'Jungle Cruise',
          waitTime: 0,
          status: 'Operating',
          fastPassStartTime: 'N/A',
          fastPassEndTime: 'N/A',
          park: 'Disneyland',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353365', 
          name: 'King Arthur Carrousel',
          waitTime: 0,
          status: 'Operating',
          park: 'Disneyland',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353369', 
          name: 'Mad Tea Party',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          park: 'Disneyland',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353377', 
          name: 'Matterhorn Bobsleds',
          waitTime: 0,
          fastPassEndTime: 'N/A',
          status: 'Operating',
          fastPassStartTime: 'N/A',
          park: 'Disneyland',
          singleRider: true
        },
        {
          id: 'DisneylandResortMagicKingdom_19193459', 
          name: 'Millennium Falcon: Smugglers Run',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          park: 'Disneyland',
          singleRider: true
        },
        {
          id: 'DisneylandResortMagicKingdom_353389', 
          name: 'Mr. Toad\'s Wild Ride',
          waitTime: 0,
          fastPassEndTime: 'N/A',
          status: 'Operating',
          fastPassStartTime: 'N/A',
          park: 'Disneyland',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353399', 
          name: 'Peter Pan\'s Flight',
          waitTime: 0,
          status: 'Operating',
          fastPassEndTime: 'N/A',
          park: 'Disneyland',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353401', 
          name: 'Pinocchio\'s Daring Journey',
          waitTime: 0,
          park: 'Disneyland',
          fastPassEndTime: 'N/A',
          status: 'Operating',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353405', 
          name: 'Pirates of the Caribbean',
          fastPassEndTime: 'N/A',
          waitTime: 0,
          status: 'Operating',
          park: 'Disneyland',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353421', 
          name: 'Roger Rabbit\'s Car Toon Spin',
          fastPassEndTime: 'N/A',
          waitTime: 0,
          status: 'Operating',
          fastPassStartTime: 'N/A',
          park: 'Disneyland',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353429', 
          name: 'Snow White\'s Scary Adventures',
          waitTime: 0,
          status: 'Operating',
          park: 'Disneyland',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353437', 
          name: 'Splash Mountain',
          waitTime: 0,
          park: 'Disneyland',
          status: 'Operating',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          singleRider: true
        },
        {
          id: 'DisneylandResortMagicKingdom_353439', 
          name: 'Star Tours - The Adventures Continue',
          waitTime: 0,
          status: 'Operating',
          park: 'Disneyland',
          fastPassEndTime: 'N/A',
          fastPassStartTime: 'N/A',
          singleRider: true
        },
        {
          id: 'DisneylandResortMagicKingdom_353443', 
          name: 'Storybook Land Canal Boats',
          waitTime: 0,
          status: 'Operating',
          fastPassStartTime: 'N/A',
          park: 'Disneyland',
          fastPassEndTime: 'N/A',
          singleRider: false
        },
        {
          id: 'DisneylandResortMagicKingdom_353449', 
          name: 'The Many Adventure of Winnie the Pooh',
          waitTime: 0,
          status: 'Operating',
          fastPassStartTime: 'N/A',
          fastPassEndTime: 'N/A',
          park: 'Disneyland',
          singleRider: false
        },
      ])
    })
};
