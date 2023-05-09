import { useEffect, useState } from "react";
import { useParams,Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/action";

import axios from "axios";
  


const Detail = () =>{

    const [data,setData]= useState({});
    
    const dispatch = useDispatch();
    const typeList = useSelector(state=>state.Types)

    const {id} = useParams();
     
    let {
         name,
         image,
         life,
         attack,
         defense,
         speed,
         height,
         weight,
         types
    } = data 
    const getData = async ()=>{
      await axios.get(`http://localhost:3001/pokemons/${id}`)
     .then((resp) => {
        setData(resp.data)
     })
     .catch((error)=> console.log(error));
    }
 

    useEffect(()=> {     
      dispatch(getTypes());  
      getData();
    },[])

       
    if(Number(id)){
        if(data[0]!==undefined){
         name = data[0].name; 
         image = data[0].image;
         life = data[0].life;
         attack = data[0].attack;
         defense = data[0].defense;
         speed = data[0].speed;
         height = data[0].height;
         weight = data[0].weight;
         types =  data[0].Types[1] ? data[0].Types[0] + "-" +  data[0].Types[1] : data[0].Types[0];
         
        }
      }
      
     if(!Number(id)){
       if(data.Types!==undefined){ 
        name= data.name;
        image= data.image;
        life= data.life;
        attack = data.attack;
        defense = data.defense;
        speed = data.speed;
        height = data.height;
        weight = data.weight;
        types = data.Types[1] ? data.Types[0].name + "-" + data.Types[1].name : data.Types[0].name  ; 
          
         console.log(data.Types[0].name);
        }
     }
     return (
        <>
        <Link to="/home">
        <button>Volver</button>
        </Link>
        <img src={image}/>
        <p>Name: {name}</p>
        <p>Life: {life}</p>
        <p>attack: {attack}</p>
        <p>Defense: {defense}</p>
        <p>Speed: {speed}</p>
        <p>Height : {height}</p>
        <p>Weight : {weight}</p>
        <p>Type : {types}</p>
        </>
     )


}


export default Detail;