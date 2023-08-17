// COMPONENT'S
import Buttons from "./Components/Buttons";
import Window from "./Components/Window";

// STYLESHEET'S
import "./StyleSheet/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="conteiner-calculator">
        <Window />
        <Buttons />
      </div>
    </div>
  );
};

export default App;
