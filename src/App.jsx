import { useState } from "react";
import "./App.css";
import phillip from "./assets/phillip.webp";
import CardContainer from "./containers/CardContainer";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-12 py-14 flex flex-col gap-y-6">
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;
