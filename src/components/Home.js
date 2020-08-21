import React from "react";
import { Link, Route, Switch } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-wrapper">

      
      <button className='pizzaButton'><Link to='/pizza'>Pizza?</Link></button>
    </div>
  );
};
export default Home;
