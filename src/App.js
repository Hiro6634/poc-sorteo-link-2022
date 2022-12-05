// import "tabler-react/dist/Tabler.css";

import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from './routes/navigation/navigation.component';
import Lottery from './routes/lottery/lottery.component';
import Administration from './routes/administration/administration.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Administration />} />
        <Route path='lottery' element={<Lottery/>} />
      </Route>
    </Routes>
  );
}

export default App;