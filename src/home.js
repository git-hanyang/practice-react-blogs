import { useEffect, useState } from "react"
import Bloglist from "./Bloglist";
import blogSample from "./data/BlogSample";


const Home = () => {  //sfc
    
    function handleDelete(){

    }

    return (
    <div className="home">
        
       <Bloglist/>

    </div>
    )
}


 
export default Home;

//npm start to runs the app in development mode. Open http://localhost:3000 to view it in the browser.