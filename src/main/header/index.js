import "./index.css";
import "antd/dist/antd.min.css";

function header() {
  return (
    <div>
      <div id="header">
        <div id="Logo">MAKERSPACE J.L.</div>
        <div className="button">Project</div>
        <div className="button">Log</div>
        <div className="button">Career</div>
        <div className="button">Contact</div>
      </div>
    </div>
  );
}

export default header;
