import "@fortawesome/fontawesome-free/css/all.min.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { SectionSignEmployers } from "./components/SectionSignEmployers";
import { Sections } from "./components/Sections";
import { Sidebar } from "./components/Sidebar";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Sidebar></Sidebar>
      <Header />
      <SectionSignEmployers />
      <Sections />

      <footer>footer</footer>
    </AppContainer>
  );
}

export default App;
