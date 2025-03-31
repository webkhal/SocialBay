import React from "react";
import { useState, useEffect } from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";

import { Dropdown } from "primereact/dropdown";

import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import citiesData from "../../../data/cities.json";
import statesData from "../../../data/states.json";

function Cities() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("view");

  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [selectedState, setSelectedState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lazyState, setLazyState] = useState({
    first: 0,
    rows: 10,
  });

  useEffect(() => {
    loadCities();
  }, [lazyState]);

  const loadCities = () => {
    setLoading(true);
    setCities(citiesData); // Ensure CitiesData is structured correctly
    setLoading(false);
  };

  const addState = () => {
    setMode("Add");
    setVisible(true);
    setSelectedState(null);
  };

  const handleSaveCity = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(selectedState);
    let newCities = [
      ...cities,
      { name: e.target.name.value, stateId: selectedState },
    ];
    setCities(newCities);
    setSelectedState(null);
    setVisible(false);

  };

  const editState = (rowData) => {
    setMode("Edit");
    setVisible(true);
    setCityName(rowData.name);
    setSelectedState(rowData.stateId);

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
          <h2>Cities</h2>
          <Button
            label="Add City"
            icon="pi pi-plus"
            className="p-button-primary"
            onClick={addState}
          />
        </div>
      </Panel>

      <div className="card">
        <DataTable
          value={cities}
          lazy
          paginator
          rows={10}
          totalRecords={cities.length}
          first={lazyState.first}
          loading={loading}
          onPage={(e) => setLazyState(e)}
          // filterDisplay="row"
          dataKey="code" // Assuming 'code' is unique
          className="datatable"
        >
          <Column field="name" name="name" header="Name" />
          <Column field="stateId.name" name="stateId"  header="stateId" />
          <Column body={actionTemplate} header="Actions" />
        </DataTable>
      </div>
      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
        style={{ width: "35%" }}
      >
        <h3>{mode}City</h3>
        <form onSubmit={handleSaveCity}>
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="code">Name</label>
              <InputText
                id="name"
                name="name"
                placeholder="Enter City"
                value={cityName}
                required
              />
            </div>
            <Dropdown
              name="stateId"
              value={selectedState}
              onChange={(e) => setSelectedState(e.value)}
              options={statesData}
              optionLabel="name"
              placeholder="Select a State"
              className="w-full md:w-14rem"
            />

            <div className="p-formgroup-inline">
              <Button
                label="Save"
                icon="pi pi-save"
                className="p-button-primary"
                type="submit"
                style={{ marginRight: "10px" }}
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

export default Cities;
