import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";

import './App.css';



function App() {

const APP_ID = "6f5574b2";
const APP_KEY = "36c009a8eb8de1d0db2e9c1374688de0";





  const [search , setSearch] = useState('');
  const [query , setQuery] = useState('banana');


  const [reci , setReci] = useState([]);

  useEffect(()=>{
  getRecip();
  },[query])

  const getRecip = async() =>{

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setReci(data.hits);
    console.log(data.hits);
    
  }
  
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Search">
      
            <h1 >Reciepe Search</h1>
        <form onSubmit ={getSearch}>
          
          <input className="input"  type="text" value = {search} onChange={(event)=>setSearch(event.target.value)}></input>
          
          <button className= "input-btn" type="submit">Search</button>
          
        </form>
        </div>

        <div className ="Recipe">
        {reci.map(recipe => (

         <Recipe
         key = {recipe.recipe.label} 
         title={recipe.recipe.label} 
         calories = {recipe.recipe.calories} 
         image = {recipe.recipe.image}
        incredients = {recipe.recipe.ingredientLines}
         />
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
