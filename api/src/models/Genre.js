const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('genre', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING
      },
    },{timestamps: true,
      createdAt: 'created',
      updatedAt: false
    })
};