const { getAllTypes } = require("../controllers/typescontrollers")


const handlerTypes = async (req,res)=> {
      
    try{
       const types = await getAllTypes();
       console.log(types);
       res.status(200).json(types);

    }catch(error){

      res.status.json({error: error.message})
    }


}


module.exports={

   handlerTypes

}