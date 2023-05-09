const axios = require('axios');
const {Op,Sequelize} = require("sequelize");
const {Pokemon,Types} = require("../db");



const getAllPokemons = async ()=>{

    const pock = []; //arreglo para agregar los pokemones de la api
  

   const dataPokemons = await Pokemon.findAll({
      
      include: [
        {model: Types,
         attributes: [
          "id",
          "name",
         ],
         through:{
          attributes:[],
         }
         }]
        } );


   const apiPokemons = (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=80")).data;
   
   console.log(apiPokemons);

   for(let pok of apiPokemons.results){
           const res= await axios.get(pok.url);
             pock.push({
                id: res.data.id,
                name: res.data.name,
                image : res.data.sprites.other.dream_world.front_default,
                life : res.data.stats[0].base_stat,
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                speed: res.data.stats[5].base_stats,
                height : res.data.height,
                weight: res.data.weight,
                Types: res.data.types.map(e => e.type.name) 
            
             }) 
           }
   

   return [...pock,...dataPokemons];

   

        }


  const getPokemonid= async (id,source)=>{

      let pokxId=[]; 

       const poke= source  === "api" ? 
       (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data:
       await Pokemon.findByPk(id);
       
       if(source === "api"){

          pokxId.push(
            {id :poke.id,
             name: poke.name,
             image : poke.sprites.other.dream_world.front_default,
             life : poke.stats[0].base_stat,
             attack: poke.stats[1].base_stat,
             defense: poke.stats[2].base_stat,
             speed: poke.stats[5].base_stats,
             height : poke.height,
             weight: poke.weight,
             Types: poke.types.map(e => e.type.name) 
             })
             console.log(pokxId);
             return pokxId; 
          }else{
            return await Pokemon.findByPk(id,
              {include: {
              model:  Types,
              attributes:["name"],
              through:{
                attributes: []
             }
             
             } });
       
          }
        
            

   }


 const getPokemonName = async (name)=> {
           
      let pokemons=[];

         /*
      const apiPockName= (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)).data;


         pockxName.push({
             id :apiPockName.id,
             name: apiPockName.name,
             image : apiPockName.sprites.other.dream_world.front_default,
             life : apiPockName.stats[0].base_stat,
             attack: apiPockName.stats[1].base_stat,
             defense: apiPockName.stats[2].base_stat,
             speed: apiPockName.stats[5].base_stats,
             height : apiPockName.height,
             weight: apiPockName.weight,
             Types: apiPockName.types.map(e => e.type.name)
          })

      console.log(pockxName.length);  
       */

      /*if(pockxName.length<1){*/

      let dataBasePocket = await Pokemon.findAll({
         where : { 
          
            name: { [Op.iLike]: `%${name.toLowerCase()}%` }
          
          },
          include: {
            model: Types,
            attributes:["name"],
            through:{
              attributes: []
           }
           
           }
          
         })
         
         for(let idx in dataBasePocket){
                pokemons.push({
                  id:dataBasePocket[idx].dataValues.id,
                  name: dataBasePocket[idx].dataValues.name,
                  image:dataBasePocket[idx].dataValues.image,
                  life : dataBasePocket[idx].dataValues.life,
                  attack: dataBasePocket[idx].dataValues.attack,
                  defense: dataBasePocket[idx].dataValues.defense,
                  speed: dataBasePocket[idx].dataValues.speed,
                  height: dataBasePocket[idx].dataValues.height,
                  weight: dataBasePocket[idx].dataValues.weight,

                 });
         }
      
         if(pokemons.length==0){
          
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
              .then(r=> {
                pokemons.push({
                  id :r.data.id,
                  name: r.data.name,
                  image : r.data.sprites.other.dream_world.front_default,
                  life : r.data.stats[0].base_stat,
                  attack: r.data.stats[1].base_stat,
                  defense: r.data.stats[2].base_stat,
                  speed: r.data.stats[5].base_stats,
                  height : r.data.height,
                  weight: r.dataweight,
                  Types: r.data.types.map(e => e.type.name)
                })
              })

            }
      
      /*const filterApi = apiPockName.find((pok) => pok.name.toLowerCase() === name.toLowerCase());
          //  */   
          // console.log(po)  
        //console.log(pockxName);
        return pokemons;   
        }
            


 const CreatePokemon = async (name,image,life,attack,defense,speed,height,weight,types)=>{
        
          // let db_types= await Type.findAll({
          //   where: {id : Type},
          //  attributes : ['id']  

       
        const pokemon = await Pokemon.create({
         
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        types
        });
        for(let idt of types){ 
        
        await pokemon.addTypes(Number(idt)); 
        } 
        
      return pokemon.dataValues;

 }


module.exports = {
    getAllPokemons,
    getPokemonid,
    CreatePokemon,
    getPokemonName,
}