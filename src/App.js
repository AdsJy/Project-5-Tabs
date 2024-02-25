// import React from "react";
import React from 'react';
import Tabs from "./Tabs";

function App() {
  



  
  return (
    <div className="app">     
      <Tabs />


    </div>
  );
}

export default App;










// import React, { useState } from 'react';

// const App = () => {
//   const [buttonColor, setButtonColor] = useState('black');
//   const [lineColor, setLineColor] = useState('black');

//   const handleButtonHover = () => {
//     setButtonColor('red'); // Change button text color to red on hover
//   };

//   const handleButtonLeave = () => {
//     setButtonColor('black'); // Reset button text color on mouse leave
//   };

//   const handleLineHover = () => {
//     setLineColor('blue'); // Change line color to blue on hover
//   };

//   const handleLineLeave = () => {
//     setLineColor('black'); // Reset line color on mouse leave
//   };

//   return (
//     <div>
//       <button
//         style={{ color: buttonColor }}
//         onMouseEnter={handleButtonHover}
//         onMouseLeave={handleButtonLeave}
//       >
//         Hover over me!
//       </button>
//       <hr
//         style={{ borderColor: lineColor }}
//         onMouseEnter={handleLineHover}
//         onMouseLeave={handleLineLeave}
//       />
//     </div>
//   );
// };

// export default App;
