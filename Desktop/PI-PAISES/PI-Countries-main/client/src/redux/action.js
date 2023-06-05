import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIESXID = "GET_COUNTRIESXID";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_COUNTRIESXNAME= "GET_COUNTRIESXNAME";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTERS = "FILTERS";
export const FILTERPOPU = "FILTERPOPU";
export const FILTERACT = "FILTERACT";

export const getCountries = () => {
    return async function (dispatch){
        const countries = await axios.get(`http://localhost:3001/countries`);
        const country = countries.data;
        dispatch({type: GET_COUNTRIES, payload : country});
    }
}

export const getActivities=()=> {
        return async function(dispatch){
           const Activities = await axios.get(`http://localhost:3001/activities`);
           const Activity = Activities.data;
           dispatch({type: GET_ACTIVITIES, payload: Activity}); 
        }    
}



export const getCountryxId=(id)=>{
    return async function (dispatch){
        const countries = await axios.get(`http://localhost:3001/countries/${id}`)
        const countryid = countries;
    
        dispatch({type: GET_COUNTRIESXID, payload:countryid});
    }

}

export const PostActivity=(Act)=>{
     return async function(dispatch){
        try{
            
        const NewActivity = await axios.post(`http://localhost:3001/activities`,Act)
        const Activity = NewActivity;
        dispatch({type: POST_ACTIVITY, payload: Activity});
        alert("La Actividad se creo con exito");
        document.getElementById("nam").value= '';
        document.getElementById("dif").value=1;
        document.getElementById("dur").value=1;
        

        }catch(error){
            alert(error.response.data.error);
            document.getElementById("nam").value= '';
            document.getElementById("dif").value=1;
            document.getElementById("dur").value=1;
        
        }
     }

}

export const CountryxName=(name)=> {
      return async function(dispatch){
         try{
         
            const CountryxName = await axios.get(`http://localhost:3001/countries/?name=${name}`)
            const dato= CountryxName.data;
            if(dato!=""){
            dispatch({type: GET_COUNTRIESXNAME, payload: dato}); 
            }else{
                alert("Pais no existe");
            }


         }catch(error){
             alert(error.response.data.error);
         }

      }
}


export const filters=(fill)=>{
     return async function(dispatch){
        
         return dispatch({type: FILTERS, payload:fill});    
       }
/*    }*/

}


export const fillPopular=(num)=>{
    return async function(dispatch){
        return dispatch({type:FILTERPOPU, payload: num});
    }
 }

 export const fillActivity=(act)=>{
    return async function(dispatch){
        return dispatch({type: FILTERACT,payload:act});

    }
 }








