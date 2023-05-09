import { useEffect, useState } from "react"
import axios from "axios";
import Modal from "../../components/Modal/Modal"
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../../redux/action";

const Form = () => {
    var array=[];   
    var dat1;
    const [openModal,setOpenModal] = useState(false);
    const [ImgCam,setImgCam]= useState("");
    const [combo,setcombo]=useState([]);
    const [form,setForm] = useState({
           name: "",
           image:"",
           life:5,
           attack:5,
           defense: 5,
           speed: 5,
           height: 5,
           weight: 5,
           types: [],
           


    })

    const [errors,setErrors] = useState({
         
           name: "",
           image:"",
           life:5,
           attack:5,
           defense: 5,
           speed: 5,
           height: 5,
           weight: 5,
           types: [],
           
    })

    const validate = (form) => {
        var ExpRegSoloLetras=/^[A-Z]+$/i;
        if(ExpRegSoloLetras.test(form.name)){
              setErrors({...errors, name:""})
        }else{
            setErrors({...errors, name:"Hay un error en el name"})
        }
        if(form.name==="") setErrors({...errors,name : "Name Vacio"});
         
    }



     const changeHandle = (event) => {
           console.log(event);
           let property = event.target.name;
           const value = event.target.value;
           console.log(event.target);
        //    if(event.target.name == "combo"){
            
        //     dat1=Number(value);
           
        //    }
        
           if(event.target.name != "combo" ){
            setForm({
                ...form,
                   [property]: value
            })
            console.log(form);
        }
            
           /* let array=[];
            
             property = event.target.name;
            array.push(Number(value));

           setForm({...form,type:[...array]}
               )
           */
           
        //   if(property!=="type"){
        //    setForm({
        //      ...form,
        //          [property]: value
            
        //    })}else{
        //       setForm({
        //         ...form,type:1 
        //       })   


        //    }

          // validate(form);
           
     }


     const dispatch = useDispatch();
     const typeList = useSelector(state=>state.Types)
   
     useEffect(()=>{
         dispatch(getTypes());
         //console.log(typeList);
     },[])

     


     function mod(event){
        event.preventDefault();
        setOpenModal(!openModal)
     }

     function handleChange(event){
         setImgCam(event.target.currentSrc);
         setOpenModal(false);
     }

     function changeHandleCombo(event){
           
           let arr=[];
           console.log(event.target.value);
           arr.push(...form.types,event.target.value);
           console.log(arr)
           setForm({...form,types:[...arr]});
           
           
      }
     
     function sumbitHandler(event){
         event.preventDefault();
         console.log(form.types);
          axios.post("http://localhost:3001/pokemons",form)
          .then(res=>alert((res)))
          .catch(err=>alert(err))
     }

     
     

    return (
    <form onSubmit={sumbitHandler}>
        
         <div>
             <img src={ImgCam}  onChange={changeHandle} name="img" />
             <input type="hidden" name="image" value={form.image=ImgCam}/>
            <div className={StyleSheet.camest}>
        <button onClick={mod} >Select Pokemon</button>
            </div>
           
        <Modal openModal={openModal}
               cambiarEstado={setOpenModal}
               titulo={"Elige tu Pokemon"} >
                
            <img onClick={handleChange} name="img1" src="https://i.pinimg.com/originals/d5/ae/56/d5ae561ccfeaf9777407c94a4c8d02ee.jpg"/>
            <img onClick={handleChange} src="https://i.pinimg.com/474x/3c/1f/26/3c1f26be644a144317055cf3c65a97ac--pikachu-pokemon-a.jpg"/>
            <img onClick={handleChange} src="http://1.bp.blogspot.com/_GI0kTUkxSgk/Su6z7BiMPOI/AAAAAAAAAn8/JoW8QaVDjJM/s200/Dig+(87).jpg"/>
        </Modal>
        </div>
        <div>
            <label>Name</label>
            <input type="text" placeholder="Enter the name" value={form.name} onChange={changeHandle} name="name"></input>
             {errors.name &&<span>{errors.name}</span>} 
        </div>
        <div>
        <label>Type 1 : </label>  
        <select onChange={changeHandleCombo} name="combo"  >
        {typeList.map((type,index)=>{
            return <option key={type.id} value={type.id} >
              {type.name}
            </option>  
        })} 
        </select>
        </div>
        <div>
        <label>Type 2 : </label>
        <select onChange={changeHandleCombo}  name="combo">
        {typeList.map((type,index)=>{
            return <option key={type.id} value={type.id} onChange={changeHandle}>
              {type.name}
              
            </option>  
        })} 
        </select>
        
        </div>
        <div>
            <label>Life</label>
            <input type="range" value={form.life} onChange={changeHandle} name="life" ></input>
        </div>
        <div>
            <label>Attack</label>
            <input type="range" value={form.attack} onChange={changeHandle} name="attack"></input>
        </div>
        <div>
            <label>Defense</label>
            <input type="range" value={form.defense} onChange={changeHandle} name="defense"></input>
        </div>
        <div>
            <label>Speed</label>
            <input type="range" value={form.speed} onChange={changeHandle} name="speed"></input>
        </div>
        <div>
            <label>Height</label>
            <input type="range" value={form.height} onChange={changeHandle} name="height"></input>
        </div>
        <div>
            <label>Weight</label>
            <input type="range" value={form.weight} onChange={changeHandle} name="weight"></input>
        </div>
        <button type="submit">
            Create Pokemon
        </button>

    </form>
    )
}


export default  Form