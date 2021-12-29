import React from 'react';
import {Link} from 'react-router-dom';
function secondPage(){
    return(
      <>
      <h1>MY SECOND PAGE</h1>
      <Link to="/thirdPage">wanna go to third</Link>
      </>  
    );
}
export default secondPage;