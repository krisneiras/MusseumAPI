import SculptureModel from "../models/SculptureModel.js";

export const getAllSculptures = async (request, response) =>{

    try{
        const sculptures = await SculptureModel.findAll(); //findAll Es un método que se va a sculptures y encuentra todo.
        response.status(200).json(sculptures); // Es 200 porque si la petición get sale bien es 200.
    }
    
    catch(error){
        response.status(500).json({message: error.message})
    }
}

// Definir la función createSculpture para crear una nueva escultura

export const createSculpture = async (req, res) => {
    try {
    
    // Crear una nueva escultura utilizando el método create del modelo SculptureModel
    const newSculpture = await SculptureModel.create(req.body);

    // Enviar la respuesta con estado 201 y la nueva escultura creada en formato JSON
    res.status(201).json(newSculpture);
    } catch (error) {
    // Manejar los errores y enviar una respuesta con estado 500 junto con el mensaje de error
    console.error(error);
    res.status(500).json({ message: error.message });
    }
   };

   // Definir la función updateSculpture para actualizar una escultura existente por su

   export const updateSculpture = async (req, res) => {
    try {
        await SculptureModel.update(req.body, { where: { id: req.params.id } })
        res.status(200).json({message: 'Escultura actualizada correctamente' });
    } catch (error) {
    // Manejar los errores y enviar una respuesta con estado 500 junto con el mensaje de error
    console.error(error);
    res.status(500).json({ message: error.message });
    }
   };

   // Definir la función deleteSculpture para eliminar una escultura por su ID
   export const deleteSculpture = async (req, res) => {
    try {
    // Extraer el ID de la escultura de los parámetros de la solicitud
    const { id } = req.params;
    // Buscar la escultura por su ID en la base de datos
    const sculpture = await SculptureModel.findByPk(id);
    // Si la escultura no existe, devolver un error 404
    if (!sculpture) {
    return res.status(404).json({ message: 'Escultura no encontrada' });
    }
    
    // Eliminar la escultura de la base de datos
    await sculpture.destroy();
    // Enviar la respuesta con estado 200 y un mensaje de éxito en formato JSON
    res.status(200).json({ message: 'Escultura eliminada correctamente' });
    } catch (error) {
    // Manejar los errores y enviar una respuesta con estado 500 junto con el mensaje de error
    console.error(error);
    res.status(500).json({ message: error.message });
    }
   }