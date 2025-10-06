import React, { useState } from "react";
import "./ToggleSwitch.scss";

interface ToggleSwitchProps {
  state?: "off" | "on";
  className?: string;
  onChange?: (state: "off" | "on") => void;
}

export const ToggleSwitch = ({ 
  state = "off", 
  className = "",
  onChange 
}: ToggleSwitchProps): JSX.Element => {
  const [internalState, setInternalState] = useState<"off" | "on">(state);
  
  const currentState = state ?? internalState;

  const handleToggle = () => {
    const newState = currentState === "off" ? "on" : "off";
    setInternalState(newState);
    onChange?.(newState);
  };

  return (
    <div 
      className={`toggle-switch ${currentState} ${className}`}
      onClick={handleToggle}
      role="switch"
      aria-checked={currentState === "on"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      <div className="knob" />
    </div>
  );
};
