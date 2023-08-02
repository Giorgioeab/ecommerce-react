import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/menu/menu";
import Accordion from "./components/accordion/accordion";

function App() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((json) => setContent(json));
  }, [])

  return (
    <div className='App'>
      <Menu />
      {JSON.stringify(content)}
      <div style={{ padding: 50 }}>
        <Accordion setContent={setContent} content={content} />
      </div>
    </div>
  );
}

export default App;
