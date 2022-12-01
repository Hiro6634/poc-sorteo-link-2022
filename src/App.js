import "tabler-react/dist/Tabler.css";

import * as React from "react";
import { Routes, Route } from "react-router-dom";

// import Faq from "./pages/faq/Faq";
import Navigation from './routes/navigation/navigation.component';
import Lottery from './routes/lottery/lottery.component';
import Home from "./pages/home/Home";
// import List from "./pages/list/List";
// const Home = () => {
//   return(
//     <div><h1>Home</h1></div>
//   );
// }
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='lottery' element={<Lottery/>} />
      </Route>
    </Routes>
  );
}

export default App;