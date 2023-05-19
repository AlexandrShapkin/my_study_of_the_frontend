import React, { useEffect, useState } from "react";
import "./styles/App.css";
import data from "./pageData.json";
import GeneralInformation from "./components/GeneralInformation/GeneralInformation";
import NavigationBar from "./components/UI/NavigationBar/NavigationBar";
import ContentBody from "./components/UI/ContentBody/ContentBody";

function App() {

  const [information, setInformation] = useState({});

  useEffect(() => {setInformation(data)}, [data]);

  let titles = [];
  information?.articles?.map((item) => titles.push(item?.title));

  return (
    <div className="app">
      <GeneralInformation
        style={{}}
        className={["general", "app__general"].join(" ")}
        information={information}
      />
      <main className="main">
        <NavigationBar className="nav" titles={titles} />
        <ContentBody items={information?.articles} />
      </main>
    </div>
  );
}

export default App;
