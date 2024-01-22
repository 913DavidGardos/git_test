
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard.jsx'
import './App.css'

//  ca5355e2ca4fe6a828f7cb45105078dd
//
//
const API_KEY = 'api_key=ca5355e2ca4fe6a828f7cb45105078dd';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const url = BASE_URL + '/search/movie?query=' + title.toString() + '&' + API_KEY;
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className = "app">
      <h1> Movie Place </h1>
      
      <div className = "search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}
          onKeyDown={e => {if(e.code === "Enter"){searchMovies(searchTerm);}}}
          />
      </div >
          { 
            movies?.length > 0 
              ? (
                <div className = "container">
                  {
                    movies.map( (movie) => ( <MovieCard key={movie.id} movie1={movie} /> ))
                  }
                </div>
              ) : ( 
                <div className="empty" >
                  <h2> No movies found </h2>
                </div>
              )
          }
    </div>
  );
}

export default App;
