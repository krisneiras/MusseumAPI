import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db.js";

const SculptureModel  = connection_db.define('Sculpture', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    image_url: {
        type: DataTypes.STRING(250),
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
    material: {
        type: DataTypes.STRING(100),
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING(150),
        allowNull: false
    }, 
},{ // Opciones adicionales del modelo
    tableName: 'sculptures', //para q coja el nombre de la tabla q yo quiero q coja de SQL
    timestamps: false // Deshabilitar los campos createdAt y updatedAt
})

export default SculptureModel;