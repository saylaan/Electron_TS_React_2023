const Timer = (sequelize, DataTypes) => {
  const Timer = sequelize.define('Timer', {
    timestamp: DataTypes.INTEGER,
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
  return Timer;
};

module.exports = Timer;
