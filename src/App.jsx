import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import LocationInfo from "./components/LocationInfo";
import getRandomNumber from "./utils/getRandomNumber";
import ResidentsCard from "./components/ResidentsCard";
import FormLocation from "./components/FormLocation";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import HeadBoard from "./components/HeadBoard";
import Loader from "./components/Loader";
import useFetch from "./hooks/useFetch";

function App() {

  const [idLocation, setIdLocation] = useState(getRandomNumber(126));

  const url=`https://rickandmortyapi.com/api/location/${idLocation}`
  const[location,getSingleLocation,isLoading,hasError]=useFetch(url)
  useEffect(() => {
    getSingleLocation()
   
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
        <Loader />
      ) : hasError ? (
        <div className="hasError-Cotainer">
          <h1> ❌ Hey! you must provide and id from 1 to 126🥺</h1>
        </div>
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
