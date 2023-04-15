import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home/Home";
import Discount from "./Pages/Discount";
import NewCollection from "./Pages/NewCollection";
import NoPage from "./Pages/NoPage";
import SummerCollection from "./Pages/SummerCollection";
import Cart from "./Components/Cart";



function App() {
  return (
      <>

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigation/>}>
                  <Route index element={<Home />} />
                  <Route path="newCollection" element={<NewCollection/>} />
                  <Route path="summerCollection" element={<SummerCollection/>} />
                  <Route path="discount" element={<Discount />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="*" element={<NoPage />} />
              </Route>

      </Routes>
      </BrowserRouter>

      </>

  );
}

export default App;
