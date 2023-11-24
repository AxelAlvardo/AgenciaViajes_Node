import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {

    //VALIDANDO FORMULARIO
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: 'El campo nombre es obligatorio' })
    }
    
    if (correo.trim() === '') {
        errores.push({ mensaje: 'El campo correo es obligatorio' })
    }
    
    if (mensaje.trim() === '') {
        errores.push({ mensaje: 'El campo mensaje es obligatorio' })
    }

    if (errores.length > 0) {

        //CONSULTAR TESTIMONIOS EXISTENTES
        const resultado = await Testimonial.findAll();

        //MOSTRAR VISTA CON ERRORES
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre, 
            correo,
            mensaje,
            resultado
        })
    }else{
        //ALMACENAR EN LA BASE DE DATOS
        try {

            await Testimonial.create({
                nombre,
                correo, 
                mensaje
            });

            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error);
        }
    }

}

export {
    guardarTestimonial
}