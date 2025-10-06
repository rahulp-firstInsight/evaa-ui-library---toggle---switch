import React from "react";
import { ToggleSwitch } from "../../components/ToggleSwitch";
import "./style.scss";

export const ToggleSwitchScreen = (): JSX.Element => {
  return <ToggleSwitch className="toggle-switch-instance" state="on" />;
};
