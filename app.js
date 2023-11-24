//IMPORTANDO EXPRESS
import express from 'express';

//IMPORTANDO EL ROUTER
import router from './routes/index.js';

//IMPORTANDO LA CONEXION A LA BASE DE DATOS
import db from './config/db.js';


//CONECTANDO 
db.authenticate()
    .then(()=> console.log('Base de datos conectada'))
    .catch((error)=> console.log(error))



//ASIGNANDO EL SERVIDOR (solo se debe tener una instancia de express)
const app = express();

//DEFINIR PUERTO
const port = process.env.PORT || 3000;


//HABILITAR PUG
app.set('view engine', 'pug');

//DEFINIR LA CARPETA PUBLICA
app.use(express.static('./public'));


//OBTENER EL AÑO ACTUAL

//next termina y se va al sigueinte middleware
app.use((req, res, next)=>{

    const year = new Date();

    res.locals.actualYear = year.getFullYear();  

    res.locals.nombreSitio = 'Agencia de Viajes';

    return next();
})

//AGREGAR BODY PARSER PARA LEER LOS DATOS DEL FORMULARIO
app.use(express.urlencoded({extended: true}));


//AGREGANDO ROUTER

//Metodo use: soporta --> get post put delete patch
app.use('/', router);

// .listen ESCUCHA SI EL SERVIDOR SE ESTA EJECUTANDO
app.listen(port, () => {
    console.log( `El servidor esta funcionando en el puerto ${port}`);
})