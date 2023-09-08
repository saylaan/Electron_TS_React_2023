const Alarm = (sequelize, DataTypes) => {
  const Alarm = sequelize.define('Alarm', {
    timestamp: DataTypes.DATE,
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    update_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
  return Alarm;
};

module.exports = Alarm;
