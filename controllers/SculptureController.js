import SculptureModel from "../models/SculptureModel.js"

//GET SCULPTURES
export const getAllSculptures = async (request, response) =>{

    try{
        const sculptures = await SculptureModel.findAll(); //findAll es un metodo que se va a sculptures y encuentra todo lo que hay
        response.status(200).json(sculptures);//es 200 porque si la peticion get sale bien es 200
      }
      
    catch(error){
        response.status(500).json({message: error.message})
    }
}

//DELETE 

export const deleteSculpture = async (req, res) => {
    const sculptureId  = req.params.id; // Asumiendo que el ID se pasa como parámetro en la URL
   
    try {
       const deletedSculpture = await SculptureModel.destroy({ where: { id: sculptureId } });
        
          res.status(201).json({ message: `Sculpture with ID ${sculptureId} deleted successfully`, sculpture: deletedSculpture });

        } 
    
    catch (error) {
       res.status(500).json({ message: 'Error al intentar eliminar la escultura', error });
    }
   };

// POST (INSERT)

export const addNewSculpture = async (req, response) =>{

  try{
    const newSculpture = await SculptureModel.create(req.body);
    response.status(201).json(newSculpture)
  }

  catch(error){
    response.status(500).json({message: error.message})
}
}

//UPDATE  (PUT)
export const editSculpture = async (req, response) =>{

  const sculptureId  = req.params.id;

  try{
    await SculptureModel.update(req.body, {where: {id: sculptureId} }); 

    const editedSculpture = await SculptureModel.findOne({ where: { id: sculptureId } });  // aqui  podria usar findByPk(id) que encuente mi primary key que es el id
    response.status(200).json({ message: `Sculpture with ID ${sculptureId} updated successfully: `, sculpture: editedSculpture })  // la clausula where es importante porque sino eliminariamos o borrariamos toda la base de datos.
  }

  catch(error){
    response.status(500).json({message: error.message})
  }
}
 
//GET ONE SCULPTURE

export const getOneSculpture = async (req, res) => {
  const sculptureId  = req.params.id;

  try{
    const oneSculpture = await SculptureModel.findOne({ where: {id: sculptureId} });
    res.status(200).json(oneSculpture);
  }

  catch(error){
    res.status(500).json({message: error.message})
  }
}


