
const { getAllPokemons,CreatePokemon,getPokemonid,getPokemonName } = require("../controllers/pokemonscontrollers");
const Pokemon = require("../models/Pokemon");


const handlerPocket = (req,res)=>{
   
    res.send('Pocket App');
 }

 const handlerPokemons = async (req,res)=>{
    
    const name = req.query.name;
    console.log(name);
    if(name){
      try{
         console.log(name);
         const pokedNamed= await getPokemonName(name);
         if(pokedNamed.length==0){
            throw new Error("El pokemon no existe");
         }
         res.status(200).json(pokedNamed);
      }catch(error){
         res.status(404).json({error: error.message})
      }
      

    }else{
    try{
      
    const Pokemons = await getAllPokemons();
    res.status(200).json(Pokemons);
    }catch(error){
        res.status(404).json({ error : error.message});
    }
}
 }

 const handlerPokemonsxid = async(req,res)=>{
    const  {id}  = req.params;
    
    const source = isNaN(id) ? "bdd" : "api";
    

    try{
       const pokemon= await getPokemonid(id,source);  
       res.status(200).json(pokemon);

    }catch(error){
        res.status(400).json({error : error.message});
    }
 }


 const handlerPokemonsPost = async(req,res)=>{
    
       try{
        const {name,image,life,attack,defense,speed,height,weight,types} = req.body;
        console.log(name,image,life,attack,defense,speed,height,weight,types);
        const newPokemon = await CreatePokemon(name,image,life,attack,defense,speed,height,weight,types); 
        res.status(201).json(newPokemon);
        
       }catch(error){
          res.status(404).json({error: error.message});
       }
     

 }

 

 module.exports={
    handlerPocket,
    handlerPokemons,
    handlerPokemonsxid,
    handlerPokemonsPost,
 }