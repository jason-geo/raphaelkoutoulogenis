import Header from "./components/UI/Header";
import "./App.css";
import { useState } from "react";
import BodyContainer from "./components/Layout/BodyContainer";

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(1);


  return (
    <div className="App">
      <Header onLinkClick={setActiveMenuItem}/>
      <BodyContainer activeLink={activeMenuItem}/>
    </div>
  );
}

export default App;



