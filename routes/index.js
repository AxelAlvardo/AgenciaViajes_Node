//IMPORTANDO EXPRESS
import express from 'express';



//IMPORTANDO CONTROLADOR
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje
} from '../controller/paginasController.js'

//IMPORTANDO TESTIMONIALES
import { guardarTestimonial } from '../controller/testimonialControlle.js';

//UTILIZAMOS EL ROUTER
const router = express.Router();


//ASIGNAMOS LAS RUTAS AL ROUTER

// req lo que enviamos express : res lo que express nos responde
router.get('/', paginaInicio)

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes )
router.get('/viajes/:slug', paginaDetalleViaje )

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

//Enviar datos a una URL metodos: post
//Eliminar datos a una URL metodos: delete


//EXPORTANDO EL ROUTER
export default router;