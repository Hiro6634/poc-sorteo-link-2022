// import "tabler-react/dist/Tabler.css";
import { useState, useContext } from 'react';
import { Routes, Route } from "react-router-dom";

import Navigation from './routes/navigation/navigation.component';
import Lottery from './routes/lottery/lottery.component';
import Administration from './routes/administration/administration.component';
// import Authentication from './routes/authentication/authentication.component';
import Test from './routes/Test/test.component';

const App = () => {
  // const {user} = useContext(UserContext);
  // const [logged, setLogged] = useState((user!==undefined || user !== null));
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Administration />}/>
        <Route path='lottery' element={<Lottery/>} />
        <Route path='test' element={<Test/>}/>
      </Route>
    </Routes>
  );
}

export default App;