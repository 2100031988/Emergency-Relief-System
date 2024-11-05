import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Application = sequelize.define('Application', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('pending', 'approved', 'rejected'),
    defaultValue: 'pending'
  },
  details: {
    type: DataTypes.JSON
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Application;