import React from 'react';
import {Link} from 'react-router-dom'
function firstPage(){
    return(
      <>
      <h1>MY FIRST PAGE</h1>
      <Link to="/secondPage">wanna go to second</Link>
      </>  
    );
}

export default firstPage;