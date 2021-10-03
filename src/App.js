import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Input from "./input/Input";

function App() {
  const openTag = "<";
  const closingTag = "/>";
  return (
    <div className="app">
      <Sidebar />
      <div className="header">Inputs</div>
      <div className="main-content">
        <div className="three-col-top">
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input{closingTag}
            </label>
            <Input />
          </div>
          <div className="display-item">
            <label className="gray-title">&:hover</label>
            <Input inputCss="standard-input-hover" />
          </div>
          <div className="display-item">
            <label className="gray-title">&:focus</label>
            <Input
              inputCss="standard-input-focus"
              labelCss="standard-label-focus"
            />
          </div>
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input error {closingTag}
            </label>
            <Input error />
          </div>
          <div className="display-item">
            <label className="gray-title">&:hover</label>
            <Input inputCss="standard-input-hover" />
          </div>
          <div className="display-item">
            <label className="gray-title">&:focus</label>
            <Input error />
          </div>
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input disabled {closingTag}
            </label>
            <Input disabled />
          </div>
        </div>
        <div className="two-col-top">
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input helperText=”Some interesting text” {closingTag}
            </label>
            <Input helperText="Some interesting text" />
          </div>
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input helperText=”Some interesting text” error{" "}
              {closingTag}
            </label>
            <Input helperText="Some interesting text" error />
          </div>
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input startIcon {closingTag}
            </label>
            <Input startIcon="pets" />
          </div>
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input endIcon {closingTag}
            </label>
            <Input endIcon="help" />
          </div>
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input value="text" {closingTag}
            </label>
            <Input value="text" />
          </div>
        </div>
        <div className="two-col-bottom">
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input size="sm" {closingTag}
            </label>
            <Input size="sm" />
          </div>
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input size="md" {closingTag}
            </label>
            <Input size="md" />
          </div>
        </div>
        <div className="one-col-full-width">
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input fullWidth {closingTag}
            </label>
            <Input fullWidth />
          </div>
        </div>
        <div className="one-col-quarter-width">
          <div className="display-item">
            <label className="standard-title">
              {openTag}Input multiline rows="4" {closingTag}
            </label>
            <Input multiline rows="4" />
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
