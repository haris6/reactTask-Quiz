
import {Routes,Route} from 'react-router-dom';
import Third from './component/thirdPage';
import First from './component/firstPage';
import Second from './component/secondPage';
function App() {
  return (
<Routes>
  <Route path="/"  element={<First/>}/>
    
  <Route path="/secondPage" element={<Second/>}/>
   
  <Route path="/thirdPage" element={<Third/>}/>
   
</Routes>
  );
}

export default App;
