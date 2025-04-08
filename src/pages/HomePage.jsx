
// export default App
import React from 'react';
import Banner from '../components/Banner.jsx';
import Gallery from '../components/Gallery.jsx';
import '../styles/HomePage.scss';
import '../styles/_mixins.scss';
import '../styles/_variables.scss';

function HomePage() {
  return (
    <div className='homePage'>
      <Banner />
      <Gallery />
    </div>
  );
}

export default HomePage;