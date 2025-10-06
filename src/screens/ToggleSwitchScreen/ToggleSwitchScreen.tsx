import React from "react";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import "./style.scss";

export const ToggleSwitchScreen = (): JSX.Element => {
  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "30px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Toggle Switch Demo</h1>
      
      <div>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Off State</h2>
        <ToggleSwitch state="off" />
      </div>
      
      <div>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>On State</h2>
        <ToggleSwitch state="on" />
      </div>
      
      <div>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Interactive</h2>
        <ToggleSwitch />
      </div>
    </div>
  );
};
