const {Activity,Country} = require("../db")




const PostActivity = async(name,difficulty,duration,season,countries)=>{

   const Activities = await Activity.create({
     name,
     difficulty,
     duration,
     season, 
   });

   for(let idpai of countries){
        await Activities.addCountry(idpai);
   }

   
   return Activities.dataValues;

}


const getActivities= async()=>{
    
     let activities = await Activity.findAll({
          attributes: ['name'],
          include : {
               model: Country,
               attributes : ["id"],
               through: {
                    attributes: []
                 }
          }
     });
     
     const mapinfo = activities.map(act => {
          return {
              name : act.name,
              countries: act.countries.map(e=> e.id) 
          }
     })
    
     return mapinfo;
}


module.exports={
    PostActivity,
    getActivities,
}

