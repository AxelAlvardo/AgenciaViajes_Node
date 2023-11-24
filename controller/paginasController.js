import { Testimonial } from "../models/Testimoniales.js";
import { Viaje } from "../models/Viaje.js";


const paginaInicio = async (req, res) => {

    //COLSUKTAR 3 VIAJES DEL MODELO VIAJE
    try {

        const viajes = await Viaje.findAll({limit: 3})
        
        const testimonios = await Testimonial.findAll({limit: 3})

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimonios
        });

    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res) => {
    //HABILITANDO TEMPLENG ENGINE
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {

    //CONSULTA A LA TABLA PARA LA VISTA
    const viajes = await Viaje.findAll();

    //HABILITANDO TEMPLENG ENGINE
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {
    try {

        const testimonios = await Testimonial.findAll();

        //HABILITANDO TEMPLENG ENGINE
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimonios
        });

    } catch (error) {
        console.log(error);
    }
}

//MUESTRA UN VIAJE POR SU SLUG
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {

        const viajes = await Viaje.findOne({
            where: { slug }
        });

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viajes
        })

    } catch (error) {
        console.error(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}