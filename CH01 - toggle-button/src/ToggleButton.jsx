import { useState } from "react";

function toggleValue(value) {
  return !value;
}

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function toggle() {
    setIsOn(toggleValue);
  }

  return <button onClick={toggle}>{isOn ? "On" : "Off"}</button>;
}

export default ToggleButton;
