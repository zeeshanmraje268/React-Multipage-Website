import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const AppContext=React.createContext();

const initialState={
        name:""
}

const AppProvider=({children})=>{

        const [state,dispatch]=useReducer(reducer,initialState);
        
      
        
        const updateHomePage=()=>{
                return dispatch({
                                type:"HOME_UPDATE",
                                payload:{
                                        name:"James Anderson",
                                        image:"./images/hero.svg",
                                }
                        })
        };
        
        
        const updateAboutPage=()=>{
                return dispatch({
                                type:"ABOUT_UPDATE",
                                payload:{
                                        name:"James Anderson",
                                        image:"./images/about1.svg",
                                }
                        })
        }; 
        
return <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}} >
        {children}
</AppContext.Provider>
}


/* Global Custom Hook */

const useGlobalContext=()=>{
        return useContext(AppContext);
}

/* End of Global Custom Hook */

export {AppContext,AppProvider,useGlobalContext};
