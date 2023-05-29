import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Parralax from './components/Parralax/Parralax';
import Biography from './components/Biography/Biography';
import Portfolio from './components/Portfolio/Portfolio';
import Registration from './components/Registration/Registration';
import Up from './components/Up/Up';
import './index.css';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Contacts from './components/Contacts/Contacts';
import Message from './components/Message/Message';
import { useEffect, useState } from 'react';
import PageNotFound from './components/404/PageNotFound';
import { useRef } from 'react';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  let message = null;

  if (isOpen) {
    message = <Message />
  }

  let opener = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 5000)
  }

  const scrolling = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  let getscroll = () => {
    if (location.pathname !== "/contacts" && location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      setTimeout(() => {
        scrolling.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  }




  return (
    <div>
      <Routes>
        <Route path="/" element={<div>
          <Parralax />
          <Biography />
          <br /><br />
          <Portfolio />
          <Registration opener={opener} innerRef={scrolling} />
          <Header registerer={getscroll} />
        </div>} />
        <Route path="/contacts" element={<div>
          <Contacts registerer={getscroll} />
          <Registration opener={opener} innerRef={scrolling} />
          <Header registerer={getscroll} />
        </div>
        } />
        <Route path="/*" element={<div>
          <PageNotFound />
          <Header registerer={getscroll} />
        </div>} />
      </Routes>
      <Up />
      {message}

    </div>
  );
}




export default App;
