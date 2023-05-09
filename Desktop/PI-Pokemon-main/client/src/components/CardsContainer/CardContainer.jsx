import style from "./CardContainer.module.css"
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Page from "../../components/Page/Page"
import { useEffect, useState } from "react";
import { getPokemons,setPokemons } from "../../redux/action";


const CardContainer = ()=> {
    
    let pokemons = useSelector(state=>state.pokemons);
    let array=[];
    array.push(pokemons);
    console.log("la cantidad de pocket es" + array);
    let page = useSelector(state=>state.page);
    let  viewPokemon = pokemons?.slice(0,12);
    
     const [paginado,setPaginado]=useState({
         pokemon: pokemons
     })

    
    // const dispatch = useDispatch();
    
    
 

    console.log(viewPokemon);

    
    // console.log("Hay algo" + paginado.form);
     
    

    function handleMod(){
        let  viewPokemon = pokemons?.slice(12,24);
           //console.log(dispatch(setPokemons()));
        setPaginado({...paginado,pokemon:[...viewPokemon]});

        console.log(paginado.pokemon);

    }


    function handleModAnt(){
        let  viewPokemon = pokemons?.slice(0,12);
        setPaginado({...paginado,pokemon:[...viewPokemon]});
    }

    let desde=0;
    let hasta=12;



     

     //let [viewPokemon,setviewPokemon]= useState(pokemons?.slice(desde,hasta));



    
    function nextPage(){
          
    }




    return (
        <div className={style.container}>
            {paginado.pokemon?.map((pokemon,index)=>{
                return <Card key={index}
                   id={pokemon.id} 
                   name={pokemon.name}
                   image={pokemon.image}
                   Types={pokemon.Types}/>
            })}
            <button onClick={()=> handleModAnt()}>ANTERIOR</button>
            <button onClick={()=> handleMod()}>NEXT</button>
        </div>
    )
}


export default CardContainer;