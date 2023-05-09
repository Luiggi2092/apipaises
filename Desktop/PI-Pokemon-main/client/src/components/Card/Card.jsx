import { Link } from "react-router-dom";
import style from "./Card.module.css"
import React from "react";

const type=[];

const Card = ({name,image,Types,id})=> {

    // console.log(type)

    return (
        <div className={style.card} >
             <Link to={`/detail/${id}`}>
            <p>{name}</p>
            <img src={image}/>
            {Types?.map((e,index)=>(
                e.name ? <p>{e.name}</p> : <p>{e}</p> 
            ))}
            </Link>
        </div>
    )
}


export default Card;