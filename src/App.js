import NavBar from "./components/NavBar";
import NavBarButton from "./components/NavBarButton";
import StartPage from "./components/StartPage";
import Camera1 from "./components/techPage/Camera1";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <StartPage />
      <Camera1 />
      <NavBarButton />
    </div>
  );
}

export default App;
