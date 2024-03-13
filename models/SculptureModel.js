import { DataTypes } from "sequelize";
import connection_db from "../database/connection_db.js";

const SculptureModel  = connection_db.define('Sculpture', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
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
    }, { 
    tableName: 'sculptures', // Para que coja el nombre de la tabla que yo quiero que coja de SQL
    timestamps: false // Deshabilitar los campos createdAt y updatedAt
})

export default SculptureModel;