import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getCountries,PostActivity,Reiniciar } from "../../redux/action";
import style from "./Form.module.css";


const Form = ()=> {
    

    const [form,setForm]= useState({
   
        name:"",
        difficulty:1,
        duration:1,
        season:"",
        countries:[]

    })


    const [errors,setErrors] = useState({
       
        name:"",
        duration:"",
        

        
    })


    const [bob,setbob]=useState("");

   const dispatch = useDispatch();
   const CountryList = useSelector(state=>state.Countries);


    useEffect(()=>{
        dispatch(getCountries()); 
        
    },[])

    

    const validate=(value,property)=>{
        var ExRegSoloLetras=/\d/;

       if(property=="name"){ 
        if(ExRegSoloLetras.test(value)){
            setErrors({...errors,name : "El name solo puede contener letras"});
        }else if(value.length < 1){
            
            setErrors({...errors,name : "El name no puede estar vacio"});
        }else{
            setErrors({...errors,name : ""});
        }
      


       }

       if(property=="duration"){
         
          if(value > 20){
            setErrors({...errors,duration: "La duracion permitida es hasta 20 horas"});
          } else{
            setErrors({...errors,duration: ""});
          }
    
         }


    }



    const changeHandle=(event)=>{
       let property = event.target.name;
       let value = event.target.value;
     
      console.log(property);


       setForm({
        ...form,
        [property]: value
       })
   

       validate(value,property);
         
        
    }


    const changeHandleCombo=(event)=>{
      
        let property = event.target.name;
        let value = event.target.value;
        
         console.log(value);

        if(property == "pai"){
            let arr=[];
            arr.push(...form.countries,value);
            console.log(arr);
            setForm({...form,countries:[...arr]});
        }

        if(property == "season"){
            setForm({...form,season: value}); 
        }


  
    }
   


      const sumbitHandler=(event)=>{
          event.preventDefault();
          dispatch(PostActivity(form));
          
         
        
        

      }

    return (
        <form onSubmit={sumbitHandler} className={style.Card}>
            <h1 className={style.titulo}>Actividad Turística</h1>
            <div>
            <label>Name: </label>
            <br/>
            <input type="text" onChange={changeHandle} name="name" id="nam"></input>
            <br/>
            <span className={style.error}>{errors.name}</span>
            </div>
            <div>
            <label>Difficulty: {form.difficulty> 0 && form.difficulty}</label>
            <br/>
            <input type="range" onChange={changeHandle} name="difficulty" min="1" max="5" value={form.difficulty} id="dif"></input>
            </div>
            <div>
             <label>Duration : {form.duration} hours</label>
             <br/>
             <input type="range" onChange={changeHandle} name="duration" step="1" min="1" max="24" value={form.duration} id="dur"></input>
             <br/>
            <span className={style.error}>{errors.duration}</span>
            </div>
            <div>
             <label>Season :</label> 
             <br/>  
            <select name="season" onChange={changeHandleCombo}>
                <option>SUMMER</option>
                <option>SPRING</option>
                <option>WINTER</option>
                <option>AUTUMN</option>
            </select>
            </div>
            <div>
                <label>Country 1 : </label>
                <br/>
                <select onChange={changeHandleCombo} name="pai">
                    <option value="0" id="co">
                          Seleccione Country
                    </option>
                    {CountryList?.map((pai,index)=>{
                        return <option key={pai.id} value={pai.id} >{pai.name}</option>
                    })}
                </select>
            </div>
            <div>
                <label>Country 2 : </label>
                <br/>
                <select onChange={changeHandleCombo} name="pai">
                    <option>
                          Seleccione Country
                    </option>
                    {CountryList?.map((pai,index)=>{
                        return <option key={pai.id} value={pai.id} >{pai.name}</option>
                    })}
                </select>
            </div>
            <div>
                <label>Country 3 : </label>
                <br/>
                <select onChange={changeHandleCombo} name="pai">
                    <option>
                          Seleccione Country
                    </option>
                    {CountryList?.map((pai,index)=>{
                        return <option key={pai.id} value={pai.id} >{pai.name}</option>
                    })}
                </select>
            </div>
            <br></br>
            <div>
                <button type="submit" className={style.but}>
                    Create
                </button>
            </div>
        </form>
    )


}



export default Form;