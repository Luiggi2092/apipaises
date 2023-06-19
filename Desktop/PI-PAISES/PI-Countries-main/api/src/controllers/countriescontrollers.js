const axios = require('axios');
const {Op,Sequelize} = require("sequelize");
const { Country,Activity } = require("../db");



const getAllCountries = async ()=> {


     let dataCount = await Country.findAll();
    
   
    if(dataCount.length=== 0){
  
     let pai = [];


     let res = (await axios("https://rest-countries.up.railway.app/v3.1/all")).data
     
     for(let i=0;i<res.length;i++){
             pai.push(
         { 
             id: res[i].cca3,
             name : res[i].name.common,
             img : res[i].flags.svg,
             continent : res[i].continents,
             capital : res[i].capital,
             subregion : res[i].subregion,
             area : res[i].area,
             population : res[i].population,
              
         });
      }
    
     pai.forEach((e)=>{ 
        if(e.capital!==undefined && e.subregion!==undefined){
        Country.findOrCreate({ where: { 
        id : e.id,
        name : e.name,
        img : e.img,
        continent: e.continent[0],
        capital:  e.capital[0],
        subregion: e.subregion,
        area : String(e.area),
        population: e.population,
    },
     
    })}});

  }
   let dataCountry = await Country.findAll({
    include: {
      model : Activity,
      attributes : ["name","difficulty","duration","season"],
    
    through:{
        attributes: []
     }
   }});
   
   const mapinfo = dataCountry.map(pai => {
     return {
         id : pai.id,
         name : pai.name,
         img : pai.img,
         continent : pai.continent,
         capital : pai.capital,
         subregion : pai.subregion,
         area : pai.area,
         population : pai.population,
         activities : pai.activities.map(e=> e.name)
     }
   })

    return mapinfo;
    
}

const getCountriesxid= async(id)=>{

    const countriesxid = await Country.findByPk(id,
        {
          include: {
            model : Activity,
            attributes : ["name","difficulty","duration","season"],
            through: {
               attributes: []
            }
          }  

        });

     
   return countriesxid;
}


const getCountryxName = async(name)=>{
   
   const countriesxname = await Country.findAll({
       where : {
              name: { [Op.iLike]: `%${name.toLowerCase()}%` }
          
       }
   })


  return countriesxname;     

}




module.exports = {
    getAllCountries,
    getCountriesxid,
    getCountryxName,
    
}