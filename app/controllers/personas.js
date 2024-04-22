const Persona = require("../../config/sql/models/personas");

const getAll = async (req, res, next) => {
    try
    {
        const listaPersonas = await Persona.findAll();
        res.send({ lista: listaPersonas });
    }
    catch(error) 
    {
        next(error);
    }
}

const findOne = async (req, res, next) => {
    try 
    {
        const persona = await Persona.findByPk(req.params.id);

        if(!persona)
        {
            res.status(404).json({ error: `No existe una persona con el ID ${req.params.id}`});
        }

        res.send({ persona: persona });
    } 
    catch (error) 
    {
        next(error);
    }
}

const create = async (req, res, next) => {
    try 
    {
        const { nombre, DNI, fechaNacimiento } = req.body;
        const existingDNI = await Persona.findOne({ where: { DNI } })

        if(!existingDNI)
        {
            const persona = await Persona.create({
                nombre: nombre,
                DNI: DNI,
                fechaNacimiento: fechaNacimiento
            });
            res.send({ creada: persona });
        }
        res.status(409).json({ error: `Ya existe una persona con el DNI ${DNI}`});

    } 
    catch (error) 
    {
        next(error);
    }
}

const update = async (req, res, next) => {
    try 
    {
        const { nombre, DNI, fechaNacimiento } = req.body;

        const persona = await Persona.findByPk(req.params.id,);

        if(!persona)
        {
            res.status(404).json({ error: `No existe una persona con el ID ${req.params.id}`});
        }


        const existingDNI = await Persona.findOne({ where: { DNI } })

        if(existingDNI && existingDNI.id !== persona.id)
        {
            res.status(409).json({ error: `Ya existe una persona con el DNI ${DNI}`});
        }

        const nuevaPersona = await persona.update({
            nombre: nombre,
            DNI: DNI,
            fechaNacimiento: fechaNacimiento
        });

        res.status(200).send({ actualizada: nuevaPersona });
    } 
    catch (error) 
    {
        next(error);
    }
}

const remove = async (req, res, next) => {
    try 
    {
        const persona = await Persona.findByPk(req.params.id);

        if(!persona)
        {
            res.status(404).json({ error: `No existe una persona con el ID ${req.params.id}`});
        }

        await persona.destroy();
        res.send({ eliminada: persona });
    } 
    catch (error) 
    {
        next(error);
    }
}

module.exports = { getAll, findOne, create, update, remove }