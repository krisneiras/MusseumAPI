import SculptureModel from "../models/SculptureModel.js"

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
        
          res.status(200).json({ message: `Sculpture with ID ${sculptureId} deleted successfully` });

        } 
    
    catch (error) {
       res.status(500).json({ message: 'Error al intentar eliminar la escultura', error });
    }
   };

// POST (INSERT)

export const addNewSculpture = async (req, response) =>{
  
  try{
    const newSculpture = await SculptureModel.create({
      image_url: req.body.image_url,
      title: req.body.title,
      author: req.body.author,
      material: req.body.material,
      year: req.body.year,
      location: req.body.location
    });
    response.status(200).json(newSculpture)
  }

  catch(error){
    response.status(500).json({message: error.message})
}
}

//UPDATE  (PUT)
export const editSculpture = async (req, response) =>{

  const sculptureId  = req.params.id;

  try{
    const editedSculpture = await SculptureModel.update({
      image_url: req.body.image_url,
      title: req.body.title,
      author: req.body.author,
      material: req.body.material,
      year: req.body.year,
      location: req.body.location
    }, {where: {id: sculptureId} }); 

    response.status(200).json({ message: `Sculpture with ID ${sculptureId} updated successfully`, sculpture: editedSculpture })  // la clausula where es importante porque sino eliminariamos o borrariamos toda la base de datos.
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

