const Persona = require("../../config/sql/models/persona");
const { httpError } = require("../helpers/handleError");

const getAll = async (req, res) => {
    try
    {
        const listaPersonas = await Persona.findAll();
        res.send({ lista: listaPersonas });
    }
    catch(error) 
    {
        httpError(res, error);
    }
}

const findOne = async (req, res) => {
    try 
    {
        const persona = await Persona.findByPk(req.params.id);
        res.send({ persona: persona });
    } 
    catch (error) 
    {
        httpError(res, error);
    }
}

const create = async (req, res) => {
    try 
    {
        const { nombre, DNI, fechaNacimiento } = req.body;
        const persona = await Persona.create({
            nombre: nombre,
            DNI: DNI,
            fechaNacimiento: fechaNacimiento
        });
        res.send({ creada: persona });
    } 
    catch (error) 
    {
        httpError(res, error);
    }
}

const update = async (req, res) => {
    try 
    {
        const { nombre, DNI, fechaNacimiento } = req.body;
        const persona = await Persona.findByPk(req.params.id,);
    
        /*         
        if(!persona) {
            return res.status(404).send({ error: "Persona no encontrada" });
        } 
        */
        
        const nuevaPersona = await persona.update({
            nombre: nombre,
            DNI: DNI,
            fechaNacimiento: fechaNacimiento
        });

        res.send({ actualizada: nuevaPersona });
    } 
    catch (error) 
    {
        httpError(res, error);
    }
}

const remove = async (req, res) => {
    try 
    {
        const persona = await Persona.findByPk(req.params.id);
        await persona.destroy();
        res.send({ eliminada: persona });
    } 
    catch (error) 
    {
        httpError(res, error);
    }
}

module.exports = { getAll, findOne, create, update, remove }