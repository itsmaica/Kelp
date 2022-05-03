'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Beaches', [
      {
        //1
        name: 'Wai\’anapanapa State Park',
        userId: 4,
        category: 'Saltwater',
        description: 'Remote, wild, volcanic coastline offering solitude and respite from urban life. Lodging, camping, picnicking, shore fishing and hardy family hiking along an ancient Hawaiian coastal trail which leads to Hana. Excellent opportunity to view a seabird colony and natural stone arch! Definitely worth a visit, will be returning next year',
        address: 'Waianapanapa',
        city: 'Hana',
        state: 'HI',
        zip_code: '96713',
      },
      {
        //2
        name: 'Lanikai Beach',
        userId: 5,
        category: 'Saltwater',
        description: 'To get the full Lanikai experience, consider getting up early and arriving to watch the sunrise. Many people hike the Lanikai Pillbox during this time, but you\’d be surprised how tranquil the beach is, just locals walking their dogs. The beach is not a renowned snorkeling spot, but beginners can still get a feel for the water and explore a wide variety of tropical fish and coral.',
        address: 'Mokulua Dr',
        city: 'Kailua',
        state: 'HI',
        zip_code: '96734',
      },
      {
        //3
        name: 'Waimea Bay',
        userId: 7,
        category: 'Saltwater',
        description: 'Waimea Bay is one of the most iconic areas on O\'ahu\'s North Shore. In the summer, it offers visitors a beautiful white sand beach to lounge and blue-green water to swim. During winter, it\'s one of the world\'s most historical surf breaks. Beach activities: Surfing, Snorkeling, Swimming and Cliff Jumping.',
        address: '61-031 Kamehameha Hwy',
        city: 'Haleiwa',
        state: 'HI',
        zip_code: '96712',
      },
      {
        //4
        name: 'Clearwater',
        userId: 5,
        category: 'Saltwater',
        description: 'Clearwater Beach is characterized by white sand beaches stretching for 2.5 miles (4 km) along the Gulf and sits on a barrier island. It has a full marina on the Intracoastal Waterway side and is linked on the south by a short bridge to another barrier island called Sand Key, where Sand Key Park is located.',
        address: '419 E Shore Dr',
        city: 'Clearwater Beach',
        state: 'FL',
        zip_code: '33767',
      },
      {
        //5
        name: 'Grand Haven State Park',
        userId: 8,
        category: 'Freshwater',
        description: 'The coast isn\'t the only place to sunbathe this spring and summer. Grand Haven State Park has a beautiful sandy shore on Lake Michigan along the west side of the park and the Grand River along the north side of the park. The park consists entirely of beach sand and provides scenic views of Lake Michigan and the Grand Haven pier and lighthouse. Activities include camping, fishing, sunbathing, volleyball and swimming.',
        address: '1001 S. Harbor Drive',
        city: 'Grand Haven',
        state: 'MI',
        zip_code: '49417',
      },
      {
        //6
        name: 'Park Point Beach',
        userId: 5,
        category: 'Freshwater',
        description: 'Park Point is located at the end of Minnesota Avenue and is a popular summer destination for swimming and recreation. The park has sand volleyball courts, and multiple pavilions and grills which are available for reservation.',
        address: '5000 Minnesota Ave',
        city: 'Duluth',
        state: 'MN',
        zip_code: '55802',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Beaches', null, {});
  }
};
