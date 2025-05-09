import React, { useState } from 'react';
import './App.css'; // You can create this for styling

function App() {
  // Replace these with actual image URLs
  const images = [
    'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example from Unsplash
    'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', // Example from Pexels
    'https://cdn.pixabay.com/photo/2015/04/19/08/35/honesty-729721_1280.jpg', // Example from Pixabay
    'https://burst.shopifycdn.com/photos/woman-holding-a-bouquet-of-flowers.jpg?width=1200&v=1695245842', // Example from Burst
    'https://picsum.photos/300/300',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="app">
      <h1>Simple Image Gallery</h1>
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className="controls">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default App;
