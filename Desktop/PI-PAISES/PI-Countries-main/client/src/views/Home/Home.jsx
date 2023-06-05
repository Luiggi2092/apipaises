import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards"
import Page from "../../components/Page/Page";
import { useDispatch,useSelector } from "react-redux";
import { getCountries,filters,getActivities,CountryxName,fillPopular,fillActivity} from "../../redux/action";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";







const Home=()=>{


    
    
    const Countries = useSelector(state=>state.Countries);
    const SearchNameAsc = useSelector(state=>state.CountryFillAsc);
    const SearchNameDes = useSelector(state=>state.CountryFillDesc);
    const SearchNamePopAsc = useSelector(state=>state.CountryFillPopAsc);
    const SearchNamePopDes = useSelector(state=>state.CountryFillPopDes);
    const ContinentsAsc = useSelector(state=>state.ContinentAsc);
    const ContinentsDes = useSelector(state=>state.ContinentDes);
    const Activityasc = useSelector(state=>state.ActivityAsc);
    const Activitydes = useSelector(state=>state.ActivityDes);
    const ActivityPopasc = useSelector(state=>state.ActivityPopAsc);
    const ActivityPopdes = useSelector(state=>state.ActivityPopDes);
    const ContinenrtspopAsc = useSelector(state=>state.ContinentFillPopAsc);
    const ContinentsPopDes = useSelector(state=>state.ContinentFillPopDes);
    
    const Activities = useSelector(state=>state.Activities);
    let totalCountries = Countries && Countries.length !==0 ? Countries.length:0;
    const [CurrentPage,setCurrentPage]= useState(0);
    const [CountryPage,SetCountryPage]= useState(10);
    const lastIndex= CurrentPage * CountryPage //10
    const firstIndex= lastIndex - CountryPage //0
    const [filSearchAsc,setSearchAsc]= useState(false);
    const [filSearchDes,setSearchDes]= useState(false);
    const [filSearchPopAsc,setSearchPopAsc]=useState(false);
    const [filSearchPopDes,setfilSearchPopDes]=useState(false);
    const [filContinentAsc,setfilContinentsAsc]=useState(false);
    const [filContinentDes,setfilContinentsDes]=useState(false);
    const [filContinentPopAsc,setfilContinentPopAsc]=useState(false);
    const [filContinentPopDes,setfillContinentPopDes]=useState(false);
    const [fillActivityasc,setfillActivityasc]=useState(false);
    const [fillActivitydes,setfillActivitydes]=useState(false);
    const [fillActivityPopasc,setfillActivityPopasc]=useState(false);
    const [fillActivityPopdes,setfillActivityPopdes]=useState(false);
    const FillName = useSelector(state=>state.CountriesFill);
    

    let fill = useSelector(state=>state.Fill);
    let fillAct= useSelector(state=>state.FillAct);

    const [fil,setFil]=useState(fill);
    const [filAct,setFilAct]=useState(fillAct);
     
    const [Search,setSearch]= useState({
        name:"",
        population:"",

    });

    const [Continents,setContinents]=useState({
        continent:"",
        pop:""
    })

    const [Orden,SetOrden]= useState({
        Orden:""
    });
    
    const [Activity,setActivity]=useState({
        name: "",
        popu:"",

    })
    
    
    
    const dispatch = useDispatch();

    useEffect(()=>{
        setCurrentPage(1)
        dispatch(getCountries());
        dispatch(getActivities()); 
        setFilAct(false);
        

       
    },[])


    
   



    const handleHandler=(event)=> {
        const name= event.target.name;
         setFil(true)
         setSearchAsc(false);
         setSearchDes(false); 
         

         setSearch({...Search,name:event.target.value,population:event.target.value})
         //setSearch({...Search,population:event.target.value})
         
         setCurrentPage(1);
         dispatch(CountryxName(event.target.value));
         
       
        
        
    }

    const Ordasc=(event)=>{
        let value = event.target.value;   
        setCurrentPage(1);

        if(Search.name){
            console.log("holi");
            setFil(false)
            setSearchAsc(true);
            setCurrentPage(1);
            dispatch(filters("ascSearch"));
        }else if(Continents.continent){
            setFil(false)
            setSearchAsc(false)
            setfilSearchPopDes(false)
            setSearchDes(false)
            setSearchPopAsc(false)
            setfilContinentsAsc(true);
            dispatch(filters("ascContinent"));

        }else if(Activity.name){
            setFil(false)
            setfillActivityasc(true)
            dispatch(filters("ascActivity"));
        }
        else{

            setFil(true)
            dispatch(filters(event.target.name));
        
        }
        
    }


    const Orddes=(event)=>{

        if(Search.name){
          console.log("aua");
            dispatch(filters("descSearch"));
            setFil(false);
            setSearchAsc(false);
            setSearchDes(true);
            console.log("dudu" + SearchNameDes);
        }else if(Continents.continent){
            setFil(false)
            setSearchAsc(false)
            setfilSearchPopDes(false)
            setSearchDes(false)
            setSearchPopAsc(false)
            setfilContinentsAsc(false)
            setfilContinentsDes(true)
            dispatch(filters("desContinent"))
             

        }else if(Activity.name){
            setFil(false)
            setfillActivityasc(false)
            setfillActivitydes(true)  
            dispatch(filters("descActivity"));
        }
        
        else{


        let value = event.target.value;    
        dispatch(getCountries()); 
        setFil(true)
        setCurrentPage(1);
        dispatch(filters(event.target.name));
        //SetOrden({...Orden,Orden:value})
        }
    } 

    const OrdAscPop=(event)=>{

        
        setSearchAsc(false)
        setSearchDes(false)

        if(Search.population){
         dispatch(fillPopular("ascpSearch"))
         //setFil(false),
         //setSearchAsc(false),
         //setSearchDes(false),
         setSearchPopAsc(true)
         setFil(false)

         
        }else if(Continents.pop){
            setSearchPopAsc(false)
            setFil(false)
            setfilContinentPopAsc(true)
            setfillContinentPopDes(false)
            console.log("goo")
           dispatch(fillPopular("ascpContinent"))
            

        }else if(Activity.popu){
            setFil(false)
            setfillActivityasc(false)
            setfillActivitydes(false)
            setfillActivityPopdes(false)
            setfillActivityPopasc(true)  
            dispatch(fillPopular("ascActivity"));
        }
        
        else{
        let value = event.target.value;   
        dispatch(getCountries());
        setCurrentPage(Number(1)) 
        setFil(true);
        dispatch(fillPopular(event.target.name))
        SetOrden({...Orden,Orden:value})
        }
    }

    const OrdDesPop=(event)=>{
          
        setSearchAsc(false)
        setSearchDes(false)

        if(Search.population){
         dispatch(fillPopular("despSearch"))
          setSearchPopAsc(false)
          setFil(false)
          setfilSearchPopDes(true)
           
        }else if(Continents.pop) {
            setFil(false)
            setSearchAsc(false)
            setfilSearchPopDes(false)
            setSearchDes(false)
            setSearchPopAsc(false)
            setfilContinentsAsc(false)
            setfilContinentsDes(false)
             setfilSearchPopDes(false)
            setfillContinentPopDes(true)
            dispatch(fillPopular("despContinent"))
             
        }else if(Activity.popu){
            setFil(false)
            setfillActivityasc(false)
            setfillActivitydes(false)
            setfillActivityPopasc(false)
            setfillActivityPopdes(true)  
            dispatch(fillPopular("desActivity"));
        }
        else{
        let value = event.target.value;   
        dispatch(getCountries()); 
        console.log(event.target.name);
        setFil(true);
        dispatch(fillPopular(event.target.name))
        SetOrden({...Orden,Orden:value})
        
        }
    }


    const onChangeCombo=(event)=>{
    
        if(isNaN(event.target.value)){
            dispatch(getCountries());
            setCurrentPage(1)
            setFil(true);
            dispatch(filters(event.target.value));
            setContinents({...Continents,continent:event.target.value,pop:event.target.value})
            
         }
         else{
            console.log("aua");
         //setFil(true);
        // dispatch(fillPopular(event.target.value));   
        
        setSearchAsc(false)
        setSearchDes(false)   
        setSearchPopAsc(false)
        setfilContinentPopAsc(false)
        setfilContinentsAsc(false);
        setfilContinentsDes(false);
        setFil(false)
        setfilSearchPopDes(false)          
        dispatch(getCountries());

       
    }
}

   const onChangeActivity=(event)=>{
      
    if(event.target.value!=="0"){
    //dispatch(getCountries());

    setFil(true);
    setCurrentPage(1)
    dispatch(fillActivity(event.target.value));
    setActivity({...Activity,name: event.target.value,popu: event.target.value})
    }else{

        setFil(false);           
        dispatch(getCountries());


    }

   }



    return(
        <div className={style.Home}>
         <div className={style.subnav}>
            <div className={style.act}>
            <label>Actividad : </label>
            <select name="actividad" onChange={onChangeActivity}>
                
                <option value="0">Seleccion :</option>
                {Activities?.map((activity,index)=>{
                    return <option key={index} value={activity.name}>{activity.name}</option>
                })}
            </select>
            </div>
            <div className={style.buq}>
           <button onClick={Ordasc} name="asc" >ASC</button> 
           <input type="search" name="Search" onChange={handleHandler} placeholder="Search Country..."/> 
           <button onClick={Orddes} name="des">DES</button>
           </div>
           <div className={style.cont}>
           <label>Continente : </label>
           <select name="continent" onChange={onChangeCombo}>
            <option value="0">Seleccione :</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
           </select>
           </div>
           <br/>
           <br/>
           <div>
            <button name="ascp" onClick={OrdAscPop}>+ poblacion</button>
            <button name="desp" onClick={OrdDesPop}>- poblacion</button>
           </div>
         </div>
         {/* { Countries?.map(e=> console.log(e.activities.length>0 && console.log(e.activities[0].name)))}
         <br/> */}
        {fil ? <Cards Countries={FillName} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         filSearchAsc ?  <Cards Countries={SearchNameAsc} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         filSearchDes ? <Cards Countries={SearchNameDes} firstIndex={firstIndex} lastIndex={lastIndex}/>: 
         filSearchPopAsc ? <Cards Countries={SearchNamePopAsc} firstIndex={firstIndex} lastIndex={lastIndex}/> : 
         filSearchPopDes ? <Cards Countries={SearchNamePopDes} firstIndex={firstIndex} lastIndex={lastIndex}/> :
         filContinentAsc ? <Cards Countries={ContinentsAsc} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         filContinentDes ? <Cards Countries={ContinentsDes} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         filContinentPopAsc ? <Cards Countries={ContinenrtspopAsc} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         filContinentPopDes ? <Cards Countries={ContinentsPopDes} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         fillActivityasc ? <Cards Countries={Activityasc} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         fillActivitydes ? <Cards Countries={Activitydes} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         fillActivityPopasc ? <Cards Countries={ActivityPopasc} firstIndex={firstIndex} lastIndex={lastIndex}/>:
         fillActivityPopdes ? <Cards Countries={ActivityPopdes} firstIndex={firstIndex} lastIndex={lastIndex}/>:

         <Cards Countries={Countries} firstIndex={firstIndex} lastIndex={lastIndex}/>} 
        {/* {fil? <Cards Countries={FillName} />:<Cards Countries={Countries} />}   
        <Cards Countries={SearchNameAsc} firstIndex={firstIndex} lastIndex={lastIndex}/>:
        <Cards Countries={FillName} firstIndex={firstIndex} lastIndex={lastIndex}/>:
              
    */}
        <br/>
        <div>
         <Page CountryPorPage={CountryPage} 
               CurrentPage={CurrentPage}
               setCurrentPage={setCurrentPage}
               totalCountries={totalCountries}
               Countries={FillName}
               fil={fil}
               filSearchAsc={filSearchAsc}
               filSearchDes={filSearchDes}
               filSearchPopAsc={filSearchPopAsc}
               filSearchPopDes={filSearchPopDes}
               filContinentAsc={filContinentAsc}
               filContinentDes={filContinentDes}
               filContinentPopAsc={filContinentPopAsc}
               filContinentPopDes={filContinentPopDes}
               fillActivityasc={fillActivityasc}
               fillActivitydes={fillActivitydes}
               fillActivityPopasc={fillActivityPopasc}
               fillActivityPopdes={fillActivityPopdes}

               
               /> 

         {/* <Paginado Countries={FillName} 
                   fill={fill} 
                   totalCountries={totalCountries}
                   CountryPorPage={CountryPage}
                   CurrentPage={CurrentPage}
               setCurrentPage={SetCurrentPage}/> */}
        </div>  
        
        </div>
    )
    


}


export default Home;