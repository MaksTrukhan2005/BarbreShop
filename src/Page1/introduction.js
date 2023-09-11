import React, { useState } from 'react';
import './css/introduction.css';
import Main from '../Page2/Main';

function Introduction() {
  const [isMainVisible, setMainVisible] = useState(false);

  return (
    <div className="main">
      <div className="page_1">
        <div className="introduction">
          <h1>the best </h1>
          <h2>BARBER SHOP</h2>
        </div>
        <div className="button_block">
          <button onClick={() => window.location.href = 'tel: 7733024795'} > call</button>
          <button  onClick={() => setMainVisible(true)}>main</button>
        </div>
      </div>
      {isMainVisible && <Main />}
    </div>
    
  );
}

export default Introduction;
