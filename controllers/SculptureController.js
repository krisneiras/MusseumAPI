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
       
       {
         res.status(200).json({ message: `Sculpture with ID ${id} deleted succesfully` });
       }
        } 
    
    catch (error) {
       res.status(500).json({ message: 'Error al intentar eliminar la escultura', error });
    }
   };

 
//GET UNA ESCULTUrA

/* export const getOneSculpture = async (req, res) =>{

  try{
    const id = req.params.sculpture.id
    const sculpture = await sculptures.findOne({
      where: id
    });
    response.status(200).json(sculptures);
  }

  catch(error){
    response.status(500).json({message: error.message})
  }
} */