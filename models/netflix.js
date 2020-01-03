module.exports = function(sequelize, DataTypes) {
  var Netflix = sequelize.define("Netflix", {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    // username: DataTypes.STRING
  });
  
  return Netflix;
};