import axios from "axios";

export const SET_POKEMONS = "SET_POKEMONS";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const NEXT_PAGE = "NEXT_PAGE";


export const getPokemons = () => {
     return async function(dispatch){
        const pokemons = await axios.get(`http://localhost:3001/pokemons`);
        const pokect = pokemons.data;
        
        dispatch({ type: GET_POKEMONS, payload : pokect  });
     }

}

export const setPokemons=(page=1)=>{
     return async function(dispatch){
        const pokemons = await axios.get(`http://localhost:3001/pokemons?limit=12&offset=${page * 10}`);
        const pokect = pokemons.data;
        
        dispatch({ type: SET_POKEMONS ,payload: pokect  });
     } 
}



export const getTypes = () => {
    return async function(dispatch){
        const Types = await axios.get("http://localhost:3001/types");
        const Type = Types.data;
        dispatch({ type: GET_TYPES, payload: Type});
    }
}

export const getxName = (name)=> {
    return async function(dispatch){
        const pocxName = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
        const pockect = pocxName.data;
        console.log(pocxName.data);
        dispatch({type: GET_POKEMONS, payload: pockect })
    }

}

export const  getPokemonsxPage= (page = 0) =>
{
 return {
    type: NEXT_PAGE,

 };   
}



