import "./App.css";
import Home from "./component/Home";
import { ThemeProvider } from "./component/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
