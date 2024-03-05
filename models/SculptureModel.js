
import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const SculptureModel = connection_db.define('Sculpture', {
 title: {
    type: DataTypes.STRING,
    allowNull: false
 },
 author: {
    type: DataTypes.STRING,
    allowNull: false
 },

},
{
    // Opciones adicionales del modelo
    tableName: 'sculptures', // Nombre de la tabla en la base de datos
    timestamps: false // Deshabilitar los campos createdAt y updatedAt
  }
);

console.log(SculptureModel === connection_db.models.Sculpture); // devuelve true


  export default SculptureModel; 