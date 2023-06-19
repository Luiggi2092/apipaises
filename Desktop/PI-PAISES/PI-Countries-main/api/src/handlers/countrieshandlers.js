const { getAllCountries,getCountriesxid,getCountryxName} = require("../controllers/countriescontrollers");




const handlerCountry = (req,res)=>{
    res.send('Country App');
}

const handlerCountries = async(req,res)=>{

  const name = req.query.name;
  


  if(name){
    
    try{
      const Country = await getCountryxName(name);
      res.status(200).json(Country);
      
    }catch(error){
      res.status(400).json({error : error.message});
    }

  }else{
  
   try{
     
    const countries = await getAllCountries();  
     res.status(200).json(countries);
   }catch(error){
     res.status(404).json({ error : error.message});
   }
  }
}



const handlerCountriesxpai = async(req,res)=>{
      
      const {id} = req.params;
   
    try{
      const Country = await getCountriesxid(id);
      res.status(200).json(Country);
    
    }catch(error){

      res.status(400).json({error : error.message});
    }
}






module.exports={
    handlerCountry,
    handlerCountries,
    handlerCountriesxpai,
}