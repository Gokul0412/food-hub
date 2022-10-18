
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Layout from './layout/Layout';
import Landingpage from './components/Landingpage';
import Fooditems from './components/Fooditems'
import Viewitem from './components/Viewitem';
import Cart from './components/Cart';
import Profile from './components/Profile';
import  Payment  from "./components/Payment";
import Newcart from './components/Newcart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Register />} />
          <Route path="/landing" element={<Landingpage />} />
          <Route element={<Layout />} >
            {/* <Route path="/Appbar" element={<Appbar />} /> */}
            <Route path="/foodmenu" element={<Fooditems />} />
            <Route path="/viewmenu" element={<Viewitem />} />
            <Route path="/buynow" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/pay" element={<Payment />} /> 
            {/* <Route path="/addtocart" element={<Newcart />} />  */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
