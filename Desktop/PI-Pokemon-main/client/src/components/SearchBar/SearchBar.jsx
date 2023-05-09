import { getPokemons,getxName } from "../../redux/action";
import { useDispatch } from "react-redux";





 

const SearchBar = () => {
     
    
   const dispatch = useDispatch();

   function handleName(){
    let input=document.getElementById("name").value;
    console.log(input);
    dispatch(getxName(input));
    console.log(getxName(input));
   }


   return( <div>
    <input type="text" id="name"></input>
    <button onClick={handleName}>Search</button> 
    </div>

   )
}



export default SearchBar;