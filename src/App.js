import ExcelReader from './excel_2'
import React from 'react';

const addresses = [
  { location: { lat: 32.080885, lng: 34.831110 }, name: 'Address 1' },
  { location: { lat: 32.080463894918765, lng: 34.831750562612 }, name: 'Address 2' },
  { location: { lat: 32.07416267185252, lng: 34.83595177240108 }, name: 'Address 3' },
  { location: { lat: 32.07716175232864, lng: 34.83634527660597 }, name: 'Address 4' },
  // Add more addresses as needed
];


const App = () => {
  return (
    <div>
      <ExcelReader />,
    </div>

  );
}

export default App;




