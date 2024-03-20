
import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const SculptureModel = connection_db.define('Sculpture', {
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
    type: DataTypes.STRING(100),
    allowNull: false
 },
 author: {
    type: DataTypes.STRING(100),
    allowNull: false
 },
 material:{
   type: DataTypes.STRING(100),
   allowNull: false
 },
 year:{
   type: DataTypes.BIGINT,
   allowNull: false
 },
 location:{
   type: DataTypes.STRING(100),
   allowNull: false
 }
},
{
    // Opciones adicionales del modelo
    tableName: 'sculptures', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar los campos createdAt y updatedAt
  }
);

console.log(SculptureModel === connection_db.models.Sculpture); // devuelve true


  export default SculptureModel; 