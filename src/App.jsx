import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import getRandomNumber from "./utils/getRandomNumber";
import ResidentsCard from "./components/ResidentsCard";
import FormLocation from "./components/FormLocation";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import HeadBoard from "./components/HeadBoard";

function App() {
  const [location, setLocation] = useState();
  const [idLocation, setIdLocation] = useState(getRandomNumber(126));
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((resp) => {
        setLocation(resp.data);
        setHasError(false);
      })
      .catch((error) => {
        console.error(error);
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }, [idLocation]);

  return (
    <>
      <div className="imeg-container">
        <HeadBoard image1={image1} image2={image2} />
      </div>
      <div className="form-container">
        <FormLocation setIdLocation={setIdLocation} />
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : hasError ? (
        <h1> ❌ Hey! you must provide and id from 1 to 126🥺</h1>
      ) : (
        <>
          <div className="location-container">
            <LocationInfo location={location} />
          </div>

          <div className="resident-container">
            {location?.residents.map((url) => (
              <ResidentsCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
