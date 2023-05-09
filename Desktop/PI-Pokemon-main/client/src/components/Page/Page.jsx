import { useDispatch, useSelector } from "react-redux";
import style from "./Page.module.css"
import { nextPage } from "../../redux/action"


const  Page = ()=> {
     
    const {numPage} = useSelector((state)=>state);
    const dispatch = useDispatch();


    return(
        <>
         <div className={style.page}>
               <p>{numPage-1}</p>
               <p>{numPage}</p>
               <p>{numPage+1}</p>
               <button>NEXT</button>


         </div> 
        </>

    );

}


export default Page;