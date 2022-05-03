'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {});
  Beach.associate = function(models) {
    // associations can be defined here
    Beach.belongsTo(models.User, { foreignKey: 'ownerId' });
    Beach.hasMany(models.Review, { foreignKey: 'beachId' });

  };
  return Beach;
};
