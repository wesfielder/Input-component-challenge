import "./App.css";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const openTag = "<";
  const closingTag = "/>";
  return (
    <div className="app">
      {/* <div className="sidebar">sidebar</div> */}
      <Sidebar />
      <div className="header">Inputs</div>
      <div className="main-content">
        <div className="three-col-top">
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input{closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="gray-title">&:hover</label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input standard-input-hover"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="gray-title">&:focus</label>
            <label className="standard-label standard-label-focus">
              Label{" "}
            </label>
            <input
              type="text"
              className="standard-input standard-input-focus"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input error {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="gray-title">&:hover</label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="gray-title">&:focus</label>
            <label className="standard-label error-label">Label </label>
            <input
              type="text"
              className="standard-input input-error"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input disabled {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
            ></input>
          </div>
        </div>
        <div className="two-col-top">
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input helperText=”Some interesting text” {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
            ></input>
            <small className="helper-text">Some interesting text</small>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input helperText=”Some interesting text” error{" "}
              {closingTag}
            </label>
            <label className="standard-label error-label">Label </label>
            <input
              type="text"
              className="standard-input input-error"
              placeholder="placeholder..."
            ></input>
            <small className="helper-text error-text">
              Some interesting text
            </small>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input startIcon {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input endIcon {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input value="text" {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
              value="Text"
            ></input>
          </div>
        </div>
        <div className="two-col-bottom">
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input size="sm" {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input small-input"
              placeholder="placeholder..."
            ></input>
          </div>
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input size="md" {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input"
              placeholder="placeholder..."
            ></input>
          </div>
        </div>
        <div className="one-col-full-width">
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input fullWidth {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <input
              type="text"
              className="standard-input full-width-input"
              placeholder="placeholder..."
            ></input>
          </div>
        </div>
        <div className="one-col-quarter-width">
          <div className="display-item">
            <div className="title"></div>
            <label className="standard-title">
              {openTag}Input multiline row="4" {closingTag}
            </label>
            <label className="standard-label">Label </label>
            <textarea
              rows="4"
              className="standard-input multiline-input"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="footer">
        <span>
          created by{" "}
          <a href="https://devchallenges.io/portfolio/wesfielder">wesfielder</a>{" "}
          - devChallenges.io
        </span>
      </div>
    </div>
  );
}

export default App;
