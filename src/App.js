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
      <Footer />
    </AppContainer>
  );
}

const FooterContainer = styled.footer`
  background-image: url(../../images/banner.png);

  height: 200px;
`;
function Footer() {
  return <FooterContainer>foodadddddddddter</FooterContainer>;
}

export default App;
