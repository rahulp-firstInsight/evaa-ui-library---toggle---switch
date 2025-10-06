import React from "react";
import "./style.scss";

interface Props {
  state: "off" | "on";
  className: any;
}

export const ToggleSwitch = ({ state, className }: Props): JSX.Element => {
  return (
    <div className={`toggle-switch ${state} ${className}`}>
      <div className="knob" />
    </div>
  );
};
