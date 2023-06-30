import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <Menu />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
