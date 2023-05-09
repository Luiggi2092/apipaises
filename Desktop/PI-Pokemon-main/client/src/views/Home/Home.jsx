import CardContainer from "../../components/CardsContainer/CardContainer";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPokemons } from "../../redux/action";

import style from "./Home.module.css";
import Page from "../../components/Page/Page";
import SearchBar from "../../components/SearchBar/SearchBar";


const Home = ()=> {

    const dispatch = useDispatch();
    
        
    useEffect(()=>{
          dispatch(getPokemons());
    },[])
      

    return (
        <div className={style.home}>
         <SearchBar/>   
         <CardContainer />
        </div>
    )
}


export default Home;