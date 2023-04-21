import './App.css';
import { Header } from './components/Header';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App">
     <Header/>

     <section><Title fontSize="40px"
     color="#6278F7">Minha Organização:</Title></section>
     <section><Title>Programação</Title></section>
     <section><Title>Front End</Title></section>
     <section><Title>Date SCience</Title></section>
     <section><Title>Devops</Title></section>
     <section><Title>UX e Design</Title></section>
     <section><Title>Mobile</Title></section>
     <section><Title>Inovação e Gestão </Title></section>
     <footer>footer</footer>

    </div>
  );
}

export default App;

