import "./App.css";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Title } from "./components/Title";
import { sections } from "./db/sections";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Title fontSize="40px" color="#6278F7">
          Minha Organização:
        </Title>
      </section>
      {sections.map(({ backgroundColor, title }) => (
        <Section title={title} backgroundColor={backgroundColor} />
      ))}
      <footer>footer</footer>
    </div>
  );
}

export default App;
