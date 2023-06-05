import style from './Detail.module.css';
import { useParams,Link} from "react-router-dom";
import { getCountryxId } from '../../redux/action';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
 
const Detail=()=>{

    
    const {id} = useParams();

    
    let DetalleCountries = useSelector(state=>state.Countriexid.data);  

    let obj="";


    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountryxId(id));
        
    },[])

    if(DetalleCountries!==undefined){
       obj={
        id :DetalleCountries.id,
        name: DetalleCountries.name,
        image: DetalleCountries.img,
        continent: DetalleCountries.continent,
        capital: DetalleCountries.capital,
        subregion: DetalleCountries.subregion,
        area: DetalleCountries.area,
        population: DetalleCountries.population,
       }
    }


    return (
        <div>
        <div className={style.Card}>
            
             <p>{obj.name}</p>
             <img src={obj.image} alt="bandera" className={style.img}/>
             <p> ID : {obj.id}</p>
             <p>Continent: {obj.continent}</p>
             <p>Capital : {obj.capital}</p>
             <p>Subregion : {obj.subregion}</p>
             <p>Area : {obj.area}</p>
             <p>Poblacion : {obj.population}</p>
        </div>
        <Link to="/home">
        <button className={style.button}>Volver</button>
        </Link>
        </div>
    )


}


export default Detail;