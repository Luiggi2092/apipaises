import { useState } from "react";
import style from "./Page.module.css";

const Page=({CountryPorPage,
             CurrentPage,
             setCurrentPage,
             totalCountries,
             Countries,
             fil,
             filSearchAsc,
             filSearchDes,
             filSearchPopAsc,
             filSearchPopDes,
             filContinentAsc,
             filContinentDes,
             filContinentPopAsc,
             filContinentPopDes,
             fillActivityasc,
             fillActivitydes,
             fillActivityPopasc,
             fillActivityPopdes})=> {

    const [pageNumberLimit,setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit,setMaxpageNumberLimit] = useState(5);
    const [minPageNumberLimit,setMinPageNumberLimit] = useState(0);



    let pageNumbers=[];

    if(fil || filSearchAsc || 
              filSearchDes || 
              filSearchPopAsc ||
              filSearchPopDes || 
              filContinentAsc ||
              filContinentDes ||
              filContinentPopAsc ||
              filContinentPopDes  ||
              fillActivityasc ||
              fillActivitydes ||
              fillActivityPopasc ||
              fillActivityPopdes){
    
       
    for(let i=1;i<=Math.ceil(Countries.length/CountryPorPage);i++){
        pageNumbers.push(i);
        
   } 
       
    }else{

    for(let i=1;i<=Math.ceil(totalCountries/CountryPorPage);i++){
         pageNumbers.push(i);
    }

       }
    const handleClick = (event)  =>{
        setCurrentPage(Number(event.target.id));
     

    }
  
    const RendersPageItems = pageNumbers.map((number)=>{
          
                return (
                   <li key={number} id={number} onClick={handleClick} className={CurrentPage == number ? style.active: "null"}>
                   {number} 
                   
                   </li>
                )
            
        }

        )
    
    

 
    const onPreviusPage=()=> {
        if(CurrentPage > 1){
            setCurrentPage(CurrentPage -1);

            if((CurrentPage - 1)%pageNumberLimit==0){
                setMaxpageNumberLimit(maxPageNumberLimit - pageNumberLimit);
                setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
         }
        }
    }


    const onNextPage = ()=> {
        if(CurrentPage<pageNumbers.length){
            setCurrentPage(CurrentPage + 1);
        

       if(CurrentPage + 1 > maxPageNumberLimit ){
              setMaxpageNumberLimit(maxPageNumberLimit + pageNumberLimit);
              setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
       }
    }
    }

   return (
    
    <div className={style.pageNumbers}>
        <button onClick={()=> onPreviusPage()} className={style.but}>Anterior</button>
        {RendersPageItems}
        <button onClick={()=> onNextPage() } className={style.but}>Siguiente</button>
    </div>
    
   )


}



export default Page;