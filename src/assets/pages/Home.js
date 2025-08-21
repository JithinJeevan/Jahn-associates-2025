import React from 'react';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  return (
    <div>
      <h1 style={{color: "#002244"}}>Welcome to JAHN ASSOCIATES</h1>
      <p>JAHN ASSOCIATES is a full-service construction and interior design firm with over two decades of experience. Since 2006, we've been transforming spaces, from residential homes and commercial offices to retail environments and hospitality venues. Our integrated approach ensures a cohesive process from initial concept to final execution, delivering projects that are not only structurally sound but also beautifully and functionally designed. We are dedicated to innovation, quality craftsmanship, and exceeding our clients' expectations.</p>
      <CarouselComponent />
      <div>
        <h2 style={{color: "#002244"}}>Our Mission</h2>
        <ul>
          <li>To provide a single point of accountability for design, construction, and interior solutions, delivering high-quality, innovative, and sustainable projects on time and within budget. We are committed to fostering long-term relationships with our clients by consistently delivering excellence and value.</li>
          
        </ul>
      </div>
      <div>
        <h2 style={{color: "#002244"}}>Our Vision</h2>
        <ul>
          <li>To be the leading name in integrated construction and interior services, recognized for our exceptional design, meticulous execution, and unwavering commitment to client satisfaction.</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Home;