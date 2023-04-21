import styled from 'styled-components';
import './App.css';
import Banner from './images/banner.png';

const Title = styled.h1`
font-family: 'Prata';
font-style: normal;
font-weight: 400;
font-size: ${prop => prop.fontSize || '32px'} ;
line-height: 43px;
display: flex;
align-items: center;
text-align: center;
color: #212121;
`

function App() {
  return (
    <div className="App">
     <Header/>

     <section><Title fontSize="40px">Minha Organização:</Title></section>
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
function Header() {
  return <header><img src={Banner} alt="banner" /></header>;
}

