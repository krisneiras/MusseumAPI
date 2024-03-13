import SculptureModel from "../models/SculptureModel.js"

// GET
export const getAllSculptures = async (request, response) => {
    try {
        const sculptures = await SculptureModel.findAll();
        response.status(200).json(sculptures);
    }
    catch(error){
        response.json({message: error.message})
    }
}

// POST
export const postSculpture = async (req, res) => {
    try {
        const newSculpture = await SculptureModel.create(req.body);
        res.status(201).json(newSculpture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// DELETE
export const deleteSculpture = async (req, res) => {
    try {
        const {id} = req.params;
        const sculpture = await SculptureModel.findByPk(id);
        if (!sculpture) {
            return res.status(404).json({ message: 'Escultura no encontrada'});
        }
        await sculpture.destroy();

        res.status(200).json({ message: 'Escultura eliminada correctamente'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//UPDATE
export const putSculpture = async (req, res) => {
    try {
        await SculptureModel.update(req.body, {where: {id: req.params.id}})
        res.status(200).json({message: 'Escultura actualizada correctamente'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
};