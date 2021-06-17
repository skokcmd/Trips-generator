import { Place, usePlacesQuery } from "./generated/graphql";
import { Vylety } from "./views/Vylety";

function App() {
  // this fetches the data from the db
  const { data, loading, error } = usePlacesQuery();
  // storing fetched data into memory using hashMap
  let storedData = new Map<number, Place>();
  // loading animation
  if (loading)
    return (
      <div className="min-h-screen bg-red-400 flex justify-center items-center">
        <img
          src="/assets/loading.svg"
          alt="loading-icon"
          width="100"
          className="animate-spin"
        />
      </div>
    );
  else if (error || !data) return <h1>error has occured</h1>;

  if (!loading && !error) {
    data.places.map((place, index) => storedData.set(index, place));
  }

  // returning Vylety component containing our hashMap with the data
  return <Vylety data={storedData} />;
}
export default App;
