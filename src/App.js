import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Page from "./components/Page";

function App() {
  const apiKey =
    "kUZkjj1YMW6CM4G5ZaeODZlc6ERMep7acQAGp3yNYSLEvUnbWfvIH3fHrHm4wGKp";
  const endpoint =
    "https://eu-west-1.aws.data.mongodb-api.com/app/data-qnydh/endpoint/data/v1";
  return (
    <div className="App">
      <Menu />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
