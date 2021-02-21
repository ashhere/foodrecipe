import React from "react";

function Recipe({title,calories,image,incredients }){
return(
    <div className = "recipe-title">
        <h1> {title}</h1>
  
        <p className="reciepe-list">
           {incredients.map(incre => (
                
               <ul>    
                   
               
                   <li>{incre}</li>
               </ul>

            ))}
        </p>   
        
        <img className="Image" src ={image} alt="" />
    </div>
)
}

export default Recipe;