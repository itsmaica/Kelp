'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    beachId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    answer: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.Beach, { foreignKey: 'beachId' })
  };
  return Review;
};
