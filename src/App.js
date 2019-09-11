import React,{useEffect,useState} from 'react';
import Recipes from './Recipes';
import Login from './Login';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
function App() {
  const APP_ID='ccbd804a';
  const APP_KEY='df618ed76cd4e34d216e457d105cd28c';
 const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState("pizza");
 
  const getrecipes=async()=>{
   const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   const data=await response.json();
   setRecipes(data.hits);
  }
  useEffect(()=>{
    getrecipes();
  },[query]);
  const change=e=>{
      setSearch(e.target.value);
  }
  const getsearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
    console.log("hi hello")
  }
  return (
    <div className="App">
    <style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    </style>
    <Router>
    <nav>
    <div className="header">
            HOG-IN
          </div>
           
                <ul>
                  <Link to='/'>
                    <li>HOME</li>
                    </Link>
                    <Link className="li1" to='/login'>
                    <li>ABOUT</li>
                    </Link>
                    <Link className="li1">
                    <li>LOGIN</li>
                    </Link>
                    <Link className="li1">
                    <li>CONTACT</li>
                    </Link>
                </ul>
            </nav>
        <br/>
        <br/>
        <form className="form" onSubmit={getsearch}>
        <input className="text" type="text" value={search} placeholder="SEARCH" onChange={change}/>
        <button className="but" type="submit">
        SUBMIT</button>
        </form>
        <div className="divi">
        {recipes.map(recipe=>(
          <Recipes key={recipe.recipe.label} title={recipe.recipe.label} description={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
        ))}
        </div>

        <Switch>
        <Route path="/login" component={Login}/>
        <br/>
        <br/>
        <br/>
          <Route path="./" exact component={Recipes}/>
        </Switch>
        </Router>
      </div>

  );
}

export default App;
