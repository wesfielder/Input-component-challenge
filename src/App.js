import "./App.css";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* <div className="sidebar">sidebar</div> */}
      <Sidebar />
      <div className="header">Inputs</div>
      <div className="item main-content">content</div>
      <div className="footer">
        created by{" "}
        <a href="https://devchallenges.io/portfolio/wesfielder">wesfielder</a> -
        devChallenges.io
      </div>{" "}
    </div>
  );
}

export default App;
