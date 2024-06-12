import "./App.css";
import { Table, Button } from "antd";
import { vehicleData } from "./fleetData";
import { columns } from "./fleetData";

function App() {
  return (
    <div>
      <header>
        <h2 className="header-style">Vehicle Management</h2>
      </header>

      <div style={{ textAlign: `right` }}>
        <Button shape="round" className="button">
          +New Vehicle{" "}
        </Button>
      </div>

      <div className="table-style">
        <Table dataSource={vehicleData} columns={columns} />;
      </div>
    </div>
  );
}

export default App;
