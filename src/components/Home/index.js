import React, { useState, useEffect } from 'react';
import axios from "axios"

import "./index.css"

const Home = () => {
    const [jokes, setJokes] = useState([]);
  
    useEffect(() => {
      axios.get('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
        .then(response => {
          setJokes(response.data.jokes);
        })
        .catch(error => {
          console.error('Error fetching jokes:', error);
        });
    }, []);
  
    return (
      <div className='home-container'>
        <h1 className='jokes-heading'>“Share your smile with the world. It’s a symbol of friendship and peace.”– Christie Brinkley</h1>
        <table className="table">
          <thead className='table-header'>
            <tr className='table-row'>
              <th className='id-head'>Id</th>
              <th className='joke-head'>Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index} className='table-row'>
                <td className='index'>{index + 1}</td>
                <td className='joke'>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Home
