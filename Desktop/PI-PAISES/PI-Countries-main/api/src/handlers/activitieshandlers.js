const { PostActivity,getActivities } = require("../controllers/activitiescontrollers")



const handlerActivitiesPost =  async(req,res)=>{

     try{
         const {name,difficulty,duration,season,countries}= req.body;
        const newActivity = await PostActivity(name,difficulty,duration,season,countries);
        res.status(200).json(newActivity);
        
     }catch(error){
        res.status(404).json({error: error.message})
     }


}


const handlerActivities = async(req,res)=>{
     
   try{
      const activities = await getActivities();
      res.status(200).json(activities);

   }catch(error){
      res.status.json({error: error.message})  

   }
}


module.exports = {handlerActivitiesPost,handlerActivities};