import React, { useState, useEffect } from "react";
import "./states.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import statesData from "../../../data/states.json"; // Ensure this contains an array of objects with 'code' and 'name'

export default function States() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("view");
  const [states, setStates] = useState([]);
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");
  const [loading, setLoading] = useState(false);
  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
  });

  useEffect(() => {
    loadStates();
  }, [lazyState]);

  const loadStates = () => {
    setLoading(true);
    setStates(statesData); // Ensure statesData is structured correctly
    setLoading(false);
  };

  const addState = () => {
    setMode("Add");
    setVisible(true);
  };

  const editState = (rowData) => {
    setMode("Edit");
    setVisible(true);
    setStateCode(rowData.code);
    setStateName(rowData.name);
    // Optionally set selected state data into form inputs
    console.log(rowData); // Log the rowData to check the structure
  };

  const handleSaveState = (e) => {

    e.preventDefault();

    let newStates = [...states];
    if (mode === "Add") {
      newStates.push({ code: e.target.code.value, name: e.target.name.value }); 
    } else {
      newStates = newStates.map((state) =>
        state.code === e.target.code.value
          ? { code: e.target.code.value, name: e.target.name.value }
          : state
      );
      }
      // console.log(newStates.data);
    setStates(newStates);
    setVisible(false);
    setMode("view");
  };

  const actionTemplate = (rowData) => (
    <Button
      icon="pi pi-pencil"
      className="p-button-text"
      onClick={() => editState(rowData)}
    />
  );

  return (
    <div>

      <Header />

      <Panel className="panel">
        <div className="panel-header">
          <h2>States</h2>
          <Button
            label="Add State"
            icon="pi pi-plus"
            className="p-button-primary"
            onClick={addState}
          />
        </div>
      </Panel>

      <div className="card">
        <DataTable
          value={states}
          lazy
          paginator
          rows={10}
          totalRecords={states.length}
          first={lazyState.first}
          loading={loading}
          onPage={(e) => setLazyState(e)}
          // filterDisplay="row"
          dataKey="code" // Assuming 'code' is unique
          className="datatable"
        >
          <Column field="code" header="Code" />
          <Column field="name" header="Name" />
          <Column body={actionTemplate} header="Actions" />
        </DataTable>
      </div> 

      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
        style={{ width: "35%" }}
      >
        <form onSubmit={handleSaveState}>
        <h3>{mode} State</h3>
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="code">Code</label>
            <InputText
              id="code"
              name="code"
              placeholder="Enter Code"
              value={stateCode}
              onChange={(e)=> setStateCode(e.target.value)}
            />
          </div>
          <div className="p-field">
            <label htmlFor="state">State</label>
            <InputText
              id="state"
              name="state"
              placeholder="Enter State"
              value={stateName}
              onChange={(e)=> setStateName(e.target.value)}
            />
          </div>
          <div className="p-formgroup-inline">
            <Button
              label="Save"
              icon="pi pi-save"
              className="p-button-primary"
type="submit"              style={{ marginRight: "10px" }}
            />
            <Button
              label="Cancel"
              icon="pi pi-times"
              className="p-button-secondary"
              onClick={() => setVisible(false)}
            />
          </div>
        </div>
        </form>
      </Sidebar>

      <Footer />
    </div>
  );
}
