import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Map from "./components/Map";

const App = () => {
  return (
    <>
      <header>
        <Header>IP Address Tracker</Header>
        <Input />
      </header>
      <section>
        <Map />
      </section>
    </>
  );
};

export default App;
