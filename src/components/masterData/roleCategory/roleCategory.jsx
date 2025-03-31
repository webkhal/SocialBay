import React from "react";
import DashboardLayout from "../../layouts/dashboardlayout";

import { useState, useEffect } from "react";


import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";


import { Button } from "primereact/button";

import roleCategoriesData from "../../../data/roleCategories.json";
// import { Card } from "primereact/card";
import { Toolbar } from "primereact/toolbar";

export default function RoleCategory() {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState("view");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [roleCategoryName, setRoleCategoryName] = useState("");
  const [roleCategories, setRoleCategories] = useState([
    { code: "", name: "" },
  ]);

  useEffect(() => {
    setTimeout(() => {
      setRoleCategories(roleCategoriesData);
    }, 1000);
  }, []);

  const startContent = () => {
    return (
      <div className="flex justify-content-between gap-2">
        <h2>Role Categories</h2>
      </div>
    );
  };

  const handleSaveRoleCtegory = (e) => {
    e.preventDefault();
    let newRoleCategory = [
      ...roleCategories,
      { code: e.target.code.value, name: e.target.name.value },
    ];
    setRoleCategories(newRoleCategory);
    setCode("");
    setRoleCategoryName("");
    setVisible(true);
  };

  const endContent = () => {
    return (
      <div className="flex gap-2">
        <form
          onSubmit={mode == "view" ? handleSaveRoleCtegory : updateRoleCategory}
        >
          <InputText
            value={code}
            name="code"
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Code"
          />
          <InputText
            value={roleCategoryName}
            name="name"
            onChange={(e) => setRoleCategoryName(e.target.value)}
            placeholder="Enter Name"
          />
          <Button
            type="submit"
            label="Add Role Category"
            className="p-button-primary"
            onClick={() => setVisible(true)}
          />
        </form>
      </div>
    );
  };

  const actionTemplate = (rowData) => (
    <Button
      icon="pi pi-pencil"
      className="p-button-text"
      onClick={() => onEdit(rowData)}
    />
  );

  const onEdit = (rowData) => {
    setMode("edit");
    setVisible(true);
    setCode(rowData.code);
    setRoleCategoryName(rowData.name);
  };

  const updateRoleCategory = (e) => {
    e.preventDefault();
    let updateRoleCategories = roleCategories.map((category) => {
      if (category.code === code) {
        category.name = roleCategoryName;
      }
      return category;
    });
    setRoleCategories(updateRoleCategories);
    setCode("");
    setRoleCategoryName("");
    setVisible(false);
  };

  return (
    <DashboardLayout>
      <div>
        <Toolbar start={startContent} end={endContent} />
        <DataTable value={roleCategories} tableStyle={{ minWidth: "50rem" }}>
          <Column field="code" header="Code"></Column>
          <Column field="name" header="Name"></Column>
          <Column body={actionTemplate} header="Actions" />
        </DataTable>
      </div>
    </DashboardLayout>
  );
}
