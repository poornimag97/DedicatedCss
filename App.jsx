import React from "react";
import Netflix from "./Netflix";
 import Hotstar from"./Hotstar";
 import Applemusic from "./Applemusic";
import Amazonprime from "./Amazonprime";
 import GeeksForGeeks from './GeeksForGeeks';

 const App=()=>{
    return(
        <>
        <Netflix/>
        <Amazonprime/>
        <Hotstar/>
         <Applemusic/>
         <GeeksForGeeks/> 
        </>
    )
 }
 export default App;