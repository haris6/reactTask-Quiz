import React from 'react';
import {Link} from 'react-router-dom';
function thirdPage(){
    return(
      <>
        <h1>MY THIRD PAGE</h1>
        <Link to="/">les just go back to first</Link>
      </>  
    );
}

export default thirdPage;