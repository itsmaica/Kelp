'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        //1
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        //2
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        //3
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        //4
        email: 'shells@user.io',
        username: 'she_sells_seashells',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        //5
        email: 'test2@.com',
        username: 'Beach-o-rama',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        //6
        email: 'user3@user.io',
        username: 'under_da_sea',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        //7
        email: 'user4@user.io',
        username: 'csurfs_up',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        //8
        email: 'hello@user.io',
        username: 'sh0w3r_sh1rt',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
