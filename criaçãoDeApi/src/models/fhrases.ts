import { Model, DataTypes} from 'sequelize';
import { conection } from './conection';

export const Fhrases = conection.define("Fhrases", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.STRING,
  },
  texto: {
    type: DataTypes.TEXT,
  }
}, {
  tableName: "fhrases",
  timestamps: false
});
