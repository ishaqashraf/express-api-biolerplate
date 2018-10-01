'use strict';

module.exports = (sequelize, DataTypes) => {
  var Demo = sequelize.define('Demo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    demo_name: DataTypes.STRING
  }, {});

//   Classroom.associate = function(models) {
//     Classroom.hasMany(models.Student, {
//       foreignKey: 'classroom_id',
//       as: 'students',
//     });
//   };

  return Demo;
};
