//IMPORTANDO CONEXION A LA BASE DE DATOS MYSQL
import { Sequelize } from "sequelize";

//IMPORTANDO DOTENV
import dotenv from 'dotenv';

dotenv.config();


//CREAMOS UNA NUEVA INSTANCIA DE SEQUILIZE 

//RECIBE 4 PARAMETROS: 
//--> Nombre de la base de datos
//--> Nombre de usuario  
//--> Password
//--> Serie de configuraciones

const db = new Sequelize(process.env.DB_URL, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});


export default db;