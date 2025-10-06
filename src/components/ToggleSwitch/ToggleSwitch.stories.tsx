import React from "react";
import { ToggleSwitch } from "./ToggleSwitch";

export default {
  title: "Components/ToggleSwitch",
  component: ToggleSwitch,
};

export const Off = () => (
  <div style={{ padding: "20px" }}>
    <ToggleSwitch state="off" />
  </div>
);

export const On = () => (
  <div style={{ padding: "20px" }}>
    <ToggleSwitch state="on" />
  </div>
);

export const Interactive = () => {
  const [state, setState] = React.useState<"off" | "on">("off");
  
  return (
    <div style={{ padding: "20px" }}>
      <ToggleSwitch 
        state={state} 
        onChange={(newState) => {
          setState(newState);
          console.log("Toggle state changed to:", newState);
        }} 
      />
      <p style={{ marginTop: "20px" }}>Current state: {state}</p>
    </div>
  );
};

export const Multiple = () => (
  <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
    <ToggleSwitch state="off" />
    <ToggleSwitch state="on" />
    <ToggleSwitch state="off" />
    <ToggleSwitch state="on" />
  </div>
);
