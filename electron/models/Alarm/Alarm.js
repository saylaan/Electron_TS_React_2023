const Alarm = (sequelize, DataTypes) => {
  const Alarm = sequelize.define('Alarm', {
    timestamp: DataTypes.DATE,
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return Alarm;
};

module.exports = Alarm;
