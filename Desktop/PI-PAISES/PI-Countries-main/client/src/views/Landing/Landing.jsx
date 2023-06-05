import { Link } from "react-router-dom";
import style from "./Landing.module.css"
import axios from "axios";

const Landing=()=> {

    const fu = async()=> {
        const api = (await axios.get("https://rest-countries.up.railway.app/v3.1/all")).data;
        console.log(api);
    }

    fu();

    return (
        <div className={style.Landing}>
           <Link to="/home"> 
           <button className={style.button}>PLAY</button>
           </Link>
        </div>
    )

}


export default Landing;