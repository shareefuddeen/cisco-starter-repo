import "./App.css";

import Banner from "./Banner.jsx";
import Exhibit from "./Exhibit.jsx";
import PacketLatency from "./PacketLatency.jsx";
import PublicIp from "./PublicIp.jsx";


function App() {
  return <>
  <div className="App">
    <Banner />
    <Exhibit title="Network Dashboard" content={<PublicIp version="v4" />}>
    </Exhibit>
  </div>
  <div className="PacketLatency">
    <PacketLatency/>
  </div>
  </>
}

export default App;
