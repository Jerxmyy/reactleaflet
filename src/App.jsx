import "./App.css";
import MapComponent from "./components/MapComponent";
import UseFetchBruxelles from "./hooks/UseFetchBruxelles";

const API_BXL =
  "https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bruxelles_parcours_bd/records?limit=100";

function App() {
  const center = { lat: 50.84499, lng: 4.34999 };

  const { data, loading, error } = UseFetchBruxelles(API_BXL);
  if (loading) {
    return <div>Chargement...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return <>{data && <MapComponent center={center} points={data} />}</>;
}

export default App;
