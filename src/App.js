import "@fortawesome/fontawesome-free/css/all.min.css";
import { AppContainer } from "./components/AppContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionSignEmployers } from "./components/SectionSignEmployers";
import { Sections } from "./components/Sections";
import { Sidebar } from "./components/Sidebar";

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

export default App;
