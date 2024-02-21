import "./App.css";
import AboutView from "./components/aboutView/aboutView";
import FirstView from "./components/firstView/firstView";
import Header from "./components/header/header";
import ProjectView from "./components/projectView/projectView";
import SkillView from "./components/skillView/skillView";

function App() {
  return (
    <div className="App">
      <ul className="shapes">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Header />
      <FirstView />
      <AboutView />
      <SkillView />
      <ProjectView />
    </div>
  );
}

export default App;
