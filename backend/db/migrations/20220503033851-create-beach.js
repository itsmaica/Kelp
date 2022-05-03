'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Beaches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      category: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true
      },
      city: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      state: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      zip_code: {
        type: Sequelize.STRING(5),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Beaches');
  }
};
