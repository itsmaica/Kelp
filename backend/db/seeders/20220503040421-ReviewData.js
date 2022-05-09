'use strict';

const bcrypt = require('bcryptjs');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
      {
        name: 'Chere-Anne Lucina',
        userId: 4,
        beachId: 2,
        rating: 4,
        answer: 'AMAZING VIEWS!! Would definitely visit again with my family. The hike was great!'
      },
      {
        name: 'Chere-Anne Lucina',
        userId: 4,
        beachId: 3,
        rating: 5,
        answer: 'Waimea Bay is essentially a much more relaxed and smaller version of Waikiki. The beach extends far and the waves are very mild. It\'s a great family destination and it\'s just a few minutes from the great waves of the Banzai and Sunset area of the North Shore.'
      },
      {
        name: 'Chere-Anne Lucina',
        userId: 4,
        beachId: 4,
        rating: 4,
        answer: 'The beach is very beautiful with white soft sand that is so fine. There are plenty of places to eat or shop. Parking is a little tricky though.'
      },
      {
        name: 'Chere-Anne Lucina',
        userId: 4,
        beachId: 5,
        rating: 4,
        answer: 'This was an easy place to start our bike ride on the Shoreline bike trail. The beach is huge, there is camping too. It is close to restaurants and shopping.'
      },
      {
        name: 'Chere-Anne Lucina',
        userId: 4,
        beachId: 6,
        rating: 4,
        answer: 'Beach was really crowded but the water was great for kids it was not very deep until you go pretty far into the water. My kids loved it.'
      },
      {
        name: 'Gary Gomez',
        userId: 5,
        beachId: 1,
        rating: 5,
        answer: 'Nice park with good views, a lava tube walk through and a black sand beach for swimming. A walking path leads to additional views. A good place to stop on the road to Hana.'
      },
      {
        name: 'Gary Gomez',
        userId: 5,
        beachId: 3,
        rating: 5,
        answer: 'We were particularly lucky to see Waimea Bay on a high surf day. The waves were especially good this day and quite a few surfers were taking advantage of it. It was fun to watch.'
      },
      {
        name: 'Gary Gomez',
        userId: 5,
        beachId: 5,
        rating: 4,
        answer: 'This may be the most beautiful park I have been to. You must not miss. The views walking around are breathtaking. You can enjoy a couple hours laying out at the beach if you wish to as well. There is an amazing cave down by the water inlet that is magical. Be prepared when you come here; at least during COVID, there was nowhere to buy water/food or go inside for a bit of shade. Still, absolutely amazing park. Enjoy!'
      },
      {
        name: 'Joe Krogan',
        userId: 6,
        beachId: 5,
        rating: 4,
        answer: 'Water was extremely cold in July, way too cold for a swim, but the weather was nice and breezy so it was pleasant to sit and people watch or take a walk on the beach.'
      },
      {
        name: 'Joe Krogan',
        userId: 6,
        beachId: 5,
        rating: 4,
        answer: 'A bit of a hidden gem. Great beach, fun to cross the bridge and drive about 7 miles along the island to the beach. Very pretty views!'
      },
      {
        name: 'Tony Stark',
        userId: 7,
        beachId: 1,
        rating: 4,
        answer: 'Always nice to see on the way to Hana.'
      },
      {
        name: 'Tony Stark',
        userId: 7,
        beachId: 2,
        rating: 4,
        answer: 'Lanikai is a beautiful place, but finding parking is an adventure in itself.'
      },
      {
        name: 'Leaf Greene',
        userId: 8,
        beachId: 1,
        rating: 5,
        answer: 'Waimea Bay is SO BEAUTIFUL!!! Beautiful sand, stunning water, picnic tables, it is the most amazing spot to spend the day. I wish with my whole heart that I had spent more time in this amazing spot, or that I had come back a second day. Please do yourself the biggest favor and plan to spend a whole day here! Bring the towels or chairs and an umbrella along with a picnic lunch and have a fantastic day at Waimea Bay!!'
      },
      {
        name: 'Leaf Greene',
        userId: 8,
        beachId: 2,
        rating: 4,
        answer: 'Beautiful beach, clean, seemed quiet but that could\'ve just been the time of day. Will absolutely return!'
      },
      {
        name: 'Leaf Greene',
        userId: 8,
        beachId: 3,
        rating: 5,
        answer: 'Very beautiful bay with a nice rock cliff jump. Not that high of a jump into the crystal clear water. The walk back up to the jump isn\'t hard either and doesn\'t require water shoes'
      },
      {
        name: 'Leaf Greene',
        userId: 8,
        beachId: 4,
        rating: 5,
        answer: 'We rented a cabana and two chairs for $75 for the day. The sand was incredibly soft and white. Lots of little seashells at the waters edge. Shops were across the street and hotels right on the beach. The pier has some more night life than day life. Nice beach to visit. Water was a little cold in March. Wasn\'t extremely crowded during Spring break.'
      },
      {
        name: 'Leaf Greene',
        userId: 8,
        beachId: 6,
        rating: 4,
        answer: 'Be sure to explore the trails at the end of the Park Point. Park near the small airport and take the trail into the Pine Woods.'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
