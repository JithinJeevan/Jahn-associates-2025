import React from 'react';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  return (
    <div>
      <h1>Welcome to JAHN ASSOCIATES</h1>
      <p>We are a leading company in providing exceptional services across various industries.</p>
      <CarouselComponent />
      <div>
        <h2>Current Projects</h2>
        <ul>
          <li>Project A</li>
          <li>Project B</li>
        </ul>
      </div>
      <div>
        <h2>Finished Projects</h2>
        <ul>
          <li>Project X</li>
          <li>Project Y</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;