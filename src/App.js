import "./App.css";
import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Title fontSize="40px" color="#6278F7">
          Minha Organização:
        </Title>
      </section>
      <Sections />

      <footer>footer</footer>
    </div>
  );
}

export default App;
