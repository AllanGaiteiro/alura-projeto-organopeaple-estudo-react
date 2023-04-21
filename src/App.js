import './App.css';
import { Header } from './components/Header';
import { SectionContainer } from './components/SectionContainer';
import { Title } from './components/Title';

function App() {
  return (
    <div className="App">
     <Header/>
     <section>
      <Title fontSize="40px" color="#6278F7" >Minha Organização:</Title>
     </section>
     <SectionContainer
     backgroundColor="#D9F7E9">
      <Title >Programação</Title>
      </SectionContainer>

     <SectionContainer backgroundColor='#E8FFFF'>
      <Title>Front End</Title>
      </SectionContainer>
     <SectionContainer backgroundColor='#E9FFE3'>
      <Title>Date SCience</Title>
      </SectionContainer>
     <SectionContainer backgroundColor='rgba(241, 97, 101, 0.15)'>
      <Title>Devops</Title>
      </SectionContainer>
     <SectionContainer backgroundColor='rgba(220, 110, 190, 0.15)'>
      <Title>UX e Design</Title>
      </SectionContainer>
     <SectionContainer backgroundColor='rgba(255, 186, 5, 0.15)'>
      <Title>Mobile</Title>
      </SectionContainer>
     <SectionContainer backgroundColor='rgba(255, 140, 42, 0.15)'>
      <Title>Inovação e Gestão </Title>
      </SectionContainer>
     <footer>footer</footer>

    </div>
  );
}

export default App;

