import { useState } from "react";
import "./App.css";
import phillip from "/phillip.webp";
import CardContainer from "./containers/CardContainer";
import Header from "./components/Header";
import SkillContainer from "./containers/SkillContainer";

function App() {
  const [count, setCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={` h-screen px-6 md:px-12 py-8 md:py-14 flex flex-col gap-y-6 ${
        isMenuOpen ? "overflow-hidden" : "overflow-auto"
      }`}
    >
      <Header onToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      <CardContainer />
    </div>
  );
}

export default App;

{
  /* <div className="px-20 grid grid-cols-5">
        <div className="col-span-4">
          <CardContainer />
        </div>

        <SkillContainer /> */
}
