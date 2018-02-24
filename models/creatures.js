module.exports = function(sequelize, DataTypes) {
  var Enemies = sequelize.define("Enemies", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    origin: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    difficulty: {
      type: DataTypes.STRING,
      defaultValue: "Adds"
    },
    strategy: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
        }
      }
  });
  return Enemies;
};