import React from 'react';
import '../styles/Pages.css'
import movie from '../../assets/movie.png';
import recipe from '../../assets/recipe.png';
import weather from '../../assets/weather.png';

export default function Portfolio() {
  return (
    <div className='portfolio-container mb-4'>
      <h2>Portfolio</h2>
      <div className='cards'>
        <div className='project-containers'>
       <a id='main' href='https://group-2-recipe-saver.herokuapp.com/login'>
        <img src={recipe} className='main'/>
       </a>
       <p className='repos'><a href='https://github.com/echandlerdavis/Recipe-Saver'>Recipe Saver Repo</a></p>
       </div>
       <div className='project-containers'>
       <a href='https://reversedentistry.github.io/Random-Movie-Selector/'>
        <img src={movie} className='others'/>
       </a>
       <p className='repos'><a href='https://github.com/reversedentistry/Random-Movie-Selector'>Random Movies Repo</a></p>
       </div>
       <div className='project-containers'>
       <a href='https://fyerra1.github.io/weather_dashboard-SERVER_SIDE_API/'>
        <img src={weather} className='others'/>
       </a>
       <p className='repos'><a href='https://github.com/fyerra1/weather_dashboard-SERVER_SIDE_API'>Weather Forecast Repo</a></p>
      </div>
      </div>
    </div>
  );
}
