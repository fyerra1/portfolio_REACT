import React from 'react';
import '../styles/Pages.css'
import movie from '../../assets/movie.png';
import recipe from '../../assets/recipe.png';
import weather from '../../assets/weather.png';

export default function Portfolio() {
  return (
    <div className='column'>
      {/* <h2>Portfolio</h2> */}
      <div className='cards'>
      <h2>Portfolio</h2>
       <a href='https://reversedentistry.github.io/Random-Movie-Selector/'>
        <img src={movie} className='main'/>
       </a>
       <a href='https://group-2-recipe-saver.herokuapp.com/login'>
        <img src={recipe} className='projects'/>
       </a>
       <a href='https://fyerra1.github.io/weather_dashboard-SERVER_SIDE_API/'>
        <img src={weather} className='projects'/>
       </a>
      </div>
    </div>
  );
}
