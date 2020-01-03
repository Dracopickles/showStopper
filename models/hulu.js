module.exports = function(sequelize, DataTypes) {
  var Hulu = sequelize.define("Hulu", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    // username: DataTypes.STRING
  });
  
  return Hulu;
};