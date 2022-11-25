import { useState } from "react";
import "./App.css";
import ColorBox from "./ColorBox";
import ColorInput from "./ColorInput";

function App() {
  const [newColor, setColor] = useState("");

  // const colorInputForm = () => {
  //   return (
  //     <form className="colorForm">
  //       <input
  //         autoFocus
  //         id="color"
  //         type="text"
  //         placeHolder="Type Color"
  //         required
  //         value={newColor}
  //         onChange = {(e) => setColor(e.target.value)}
  //       />

  //       <button>Enter</button>
  //     </form>
  //   );
  // };

  const colorInput = newColor;

  return (
    <div className="App">
      <ColorBox colorcode={colorInput} />
      <ColorInput color={newColor} setColor={setColor}/>
      {/* <div>{colorInputForm()}</div> */}
    </div>
  );
}

export default App;
