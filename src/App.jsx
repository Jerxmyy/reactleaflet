import "./App.css";
import MapComponent from "./components/MapComponent";

function App() {
  const center = { lat: 50.8465573, lng: 4.351697 };
  return (
    <>
      <MapComponent center={center}></MapComponent>
    </>
  );
}
export default App;
