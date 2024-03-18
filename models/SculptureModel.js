import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const Sculpture = connection_db.define('sculptures', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  image_url: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  material: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
},{
  // Opciones adicionales del modelo
  tableName: 'sculptures', // Nombre de la tabla en la base de datos
  timestamps: false // Deshabilitar los campos createdAt y updatedAt
});

export default Sculpture;



