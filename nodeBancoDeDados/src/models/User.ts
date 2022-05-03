import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserAttributes extends Model {
  id: number;
  name: string;
  age: number;
};

export const User = sequelize.define<UserAttributes>("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18,
  },
}, {
  tableName: "users",
  timestamps: false
});


