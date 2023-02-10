import { useState } from "react";

import "./App.css";

import Header from "./components/UI/Header";
import BodyContainer from "./components/Layout/BodyContainer";
import Footer from "./components/Layout/Footer";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(1);


  return (
    <div className="App">
      <Header onLinkClick={setActiveMenuItem}/>
      <BodyContainer activeLink={activeMenuItem}/>
      <Footer onLinkClick={setActiveMenuItem}/>
    </div>
  );
}

export default App;



