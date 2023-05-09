const axios = require('axios');

const { Types } = require("../db");


const getAllTypes= async ()=>{

    let types=[];
    let type = await Types.count();

    // if(type){
    //      console.log("entro aqui");
    // }else{

     const ApiTypes = (await axios.get("https://pokeapi.co/api/v2/type")).data.results;
     for(let tip of ApiTypes){
          types.push(tip.name);
     }

     types.forEach(e => Types.findOrCreate({ where: { name : e}}));

     const Tipos = await Types.findAll(); 

    return Tipos;
    
}


module.exports={

    getAllTypes
}