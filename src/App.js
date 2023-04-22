import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { SidebarButton } from "./SidebarButton";
import { Header } from "./components/Header";
import { SectionSignEmployers } from "./components/SectionSignEmployers";
import { Sections } from "./components/Sections";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* Inclui o sidebar */}
      <Sidebar>
        <SidebarButton>1</SidebarButton>
        <SidebarButton>2</SidebarButton>
        <SidebarButton>3</SidebarButton>
      </Sidebar>
      <Header />
      <SectionSignEmployers />
      <Sections />

      <footer>footer</footer>
    </div>
  );
}

export default App;
