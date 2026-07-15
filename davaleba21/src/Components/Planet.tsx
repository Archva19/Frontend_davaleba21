import "./Planet.css";
import planetsData from "../planets.json";
import { useParams } from "react-router-dom";
import { useState } from "react";

const buttons = [
  { id: 1, infoStatus: "overview", title: "OVERVIEW" },
  { id: 2, infoStatus: "structure", title: "INTERNAL STRUCTURE" },
  { id: 3, infoStatus: "geology", title: "SURFACE GEOLOGY" },
];

const buttonsRes = [
  { id: 1, infoStatus: "overview", title: "OVERVIEW" },
  { id: 2, infoStatus: "structure", title: "STRUCTURE" },
  { id: 3, infoStatus: "geology", title: "GEOLOGY" },
];

export default function Planet() {
  let { planetName } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === planetName?.toLowerCase(),
  );

  if (!planet) {
    return <h1>Planet Not Found!</h1>;
  }

  const [activeInfo, setActiveInfo] = useState("overview");

  function generateText() {
    if (activeInfo === "overview") return planet?.overview?.content;
    if (activeInfo === "structure") return planet?.structure?.content;
    if (activeInfo === "geology") return planet?.geology?.content;
  }

  function generateSource() {
    if (activeInfo === "overview") return planet?.overview?.source;
    if (activeInfo === "structure") return planet?.structure?.source;
    if (activeInfo === "geology") return planet?.geology?.source;
  }

  const bonusInfo = [
    { id: 1, title: "ROTATION TIME", info: `${planet?.rotation ?? ""}` },
    { id: 2, title: "REVOLUTION TIME", info: `${planet?.revolution ?? ""}` },
    { id: 3, title: "RADIUS", info: `${planet?.radius ?? ""}` },
    { id: 4, title: "AVERAGE TEMP.", info: `${planet?.temperature ?? ""}` },
  ];

  return (
    <>
      <div className="responsiveBtnContainer">
        {buttonsRes.map((button) => (
          <button
            key={button.id}
            className={`resInfoBtn resInfoBtn${planet.name} ${button.infoStatus === activeInfo ? `resActiveBtn resActiveBtn${planet.name}` : ""}`}
            onClick={() => setActiveInfo(button.infoStatus)}
          >
            <p className="resButtonTitle">{button.title}</p>
          </button>
        ))}
      </div>
      <div className="mainContent">
        <div className="mainContentTop">
          <div className="planetImagesContainer">
            <div className={`planetImages planetImages${planet.name}`}>
              <img
                className={`mainImg mainImg${planet.name}`}
                src={planet.images.planet}
                alt=""
              />
              {planet.name === "Saturn" ? (
                <>
                  <img
                    className="saturnBackRing"
                    src={"assets/saturnBackRing.svg"}
                  />
                  <img
                    className="saturnFrontRing"
                    src={"assets/saturnFrontRing.svg"}
                  />
                </>
              ) : null}
              {activeInfo === "structure" ? (
                <img
                  className="internalImg"
                  src={planet.images.internal}
                  alt=""
                />
              ) : null}
              {activeInfo === "geology" ? (
                <img
                  className={`geologyImg geologyImg${planet.name}`}
                  src={planet.images.geology}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <div className="planetInfo">
            <div className="planetInfoTxts">
              <p className="planetName">{planet.name}</p>
              <p className="planetTxtInfo">{generateText()}</p>
              <div className="infoSource">
                Source :
                <a className="sourceLink" href={generateSource()}>
                  Wikipedia
                  <img
                    className="sourceIcon"
                    src="/assets/linkIcon.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="btnContainer">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  className={`infoBtn infoBtn${planet.name} ${button.infoStatus === activeInfo ? `activeBtn${planet.name}` : ""}`}
                  onClick={() => setActiveInfo(button.infoStatus)}
                >
                  <p className="buttonNum">0{button.id}</p>
                  <p className="buttonTitle">{button.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mainContentBottom">
          {bonusInfo.map((info) => (
            <div className="bottomInfo" key={info.id}>
              <p className="bonusInfoTitle">{info.title}</p>
              <p className="bonusInfo">{info.info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
