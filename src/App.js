import "./App.css";
import Header from "./components/Header";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Store from "./pages/Store";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Privicy from "./pages/Privicy";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Login from "./components/login/Login";
import Order from "./components/Order";
import Favorite from "./components/Favorite";
import {  useSelector } from "react-redux";

function App() {
  const activeCat = useSelector((state) => state.category.activeCat);


  return (
  
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Խանութ" element={<Store />}></Route>
          <Route path="/Մեր մասին" element={<About />}></Route>
          <Route path="/Կապ" element={<Contact />}></Route>
          <Route path="/Զամբյուղ" element={<Cart />}></Route>
          <Route path={`/${activeCat}`} element={<Product />}></Route>
          <Route path="/Մուտք / Գրանցում" element={<Login />}></Route>
          <Route path="/Վճարման Համակարգ" element={<Order />}></Route>
          <Route path="/Մրգեր և բանջարեղեն" element={<Store />}></Route>
          <Route path="/Խմիչքներ" element={<Store />}></Route>
          <Route path="/Կաթնամթերք" element={<Store />}></Route>
          <Route path="/Նպարեղեն" element={<Store />}></Route>
          <Route
            path="/Գաղտնիության քաղաքականություն"
            element={<Privicy />}
          ></Route>
          <Route path="/Նախընտրած ապրանքներ" element={<Favorite />}></Route>
        </Routes>
        <a href="#header">
          <BsFillArrowUpCircleFill className="up" />
        </a>
        <Footer />
      </div>

  );
}

export default App;
