import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation/Navigation";
import { createContext, useEffect, useState } from "react";
import Cards from "./Cards/Cards";
import Banner from "./Banner/Banner";

export const UserContext = createContext();
function App() {
  const [infos, setInfos] = useState([]);
  const [bannerInfo, setBannerInfo] = useState({});
  useEffect(() => {
    const url = `https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInfos(data.results));
  }, []);

  const handleBanner = (data) => {
    console.log(data);
    setBannerInfo(data);
  };
  return (
    <UserContext.Provider value={[infos, setInfos]}>
      <div className="container ">
        <Navigation />
        <Banner bannerInfo={bannerInfo} />
        <Cards handleBanner={handleBanner} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
