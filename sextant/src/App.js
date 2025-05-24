import "./App.css";

import Banner from "./Banner.jsx";
import Exhibit from "./Exhibit.jsx";

function App() {
  return <>
  <div className="App">
    <Banner />
    <Exhibit title="Network Dashboard" content="Network content" />

    <Exhibit title="Latency" content="Network Latency" />
  </div>
  </>
}

export default App;
