import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";



const Cards =({Countries,firstIndex,lastIndex})=> {

 
 

    return (
        <div className={style.container}>
          {Countries?.map((pai,index)=>{
            return <Card key={index}
            id={pai.id}
            name={pai.name}
            img={pai.img}
            continent={pai.continent}/>
         }).slice(firstIndex,lastIndex)}   
        </div>
    )

} 


export default Cards;