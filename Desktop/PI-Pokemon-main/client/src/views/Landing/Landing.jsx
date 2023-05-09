import { Link } from "react-router-dom"
import style from "./Landing.module.css"
// import traffic from "../../music/city-traffic-1.mp3"


//     var AudioPlay = new Audio (traffic);
//     AudioPlay.loop=true;
//     AudioPlay.play();


const Landing = ()=> {
     
    

    return (
         
        <div className={style.Landing}>  
         <Link to="/home"> 
         <button className={style.button}>Start</button>   
         </Link>           
        
        </div>
         
    )


}



export default Landing;