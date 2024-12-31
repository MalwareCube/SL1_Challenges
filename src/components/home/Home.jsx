import React from 'react';
import { Link } from 'react-router-dom';

// Data
import challengedb from '../../components/challenges/data/challengedb.js';

const Home = () => {

  return (
      <div className="container">
        <div className="navCard">
          {challengedb.map((challenge) => {
            const { id, title, category } = challenge;

            return (
              <Link key={id} to={`/${id}`} className="navCard_card">
                <h1>{id}</h1>
                <h2>{title}</h2>
                <h3>{category}</h3>
              </Link>
            );
          })}
        </div>
    </div>
  );
};

export default Home;
