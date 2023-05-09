import {GET_TYPES, NEXT_PAGE,GET_POKEMONS,SET_POKEMONS } from "./action";

const initialState = {
    page: 0,
    pokemons : [],
    Types: [],
}

const rootReducer=(state  = initialState ,action)=>{
    
    switch(action.type){
        case GET_POKEMONS:
            return {... state,pokemons: action.payload};
        case GET_TYPES:
            return {... state,Types: action.payload};
        case NEXT_PAGE:
            return {...state, numPage: state.numPage  + 1 }; 
        case SET_POKEMONS:
              return {...state, pokemons: action.payload};   
        default:
            return { ...state };
    }


}



export default rootReducer;