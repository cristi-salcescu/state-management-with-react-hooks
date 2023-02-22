import { useState } from "react";

function toogleIsOn(state) {
  return { ...state, isOn: !state.isOn };
}

function ToggleButton() {
  const [state, setState] = useState({
    isOn: false
  });

  function toggle() {
    setState(toogleIsOn);
  }

  return <button onClick={toggle}>{state.isOn ? "On" : "Off"}</button>;
}

export default ToggleButton;
