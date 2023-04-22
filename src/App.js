import "./App.css";
import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { SectionSignEmployers } from "./components/SectionSignEmployers";
function App() {
  return (
    <div className="App">
      <Header />
      <SectionSignEmployers />
      <Sections />

      <footer>footer</footer>
    </div>
  );
}

export default App;
