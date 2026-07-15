import { Link } from "react-router-dom";
import "./Header.css";
import planetsData from "../planets.json";
import { useState } from "react";

export default function Header() {
  const [menuVis, setMenuVis] = useState(false);
  return (
    <>
      <header className="header">
        <p className="logo">THE PLANETS</p>
        <nav className="navigation">
          <ul className="navList">
            {planetsData.map((planet) => (
              <li className="navItem">
                <Link
                  to={`/${planet.name}`}
                  className={`navLink ${planet.name}`}
                >
                  {planet.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="sandwichButton"
            onClick={() => setMenuVis(!menuVis)}
          >
            <img className="sandwich" src={"assets/Group.svg"} alt="menu" />
          </button>
        </nav>
        {menuVis ? (
          <div className="sideMenu">
            {planetsData.map((planet) => (
              <Link to={`/${planet.name}`}>
                <button className="sideMenuBtn" onClick={() => setMenuVis(false)}>
                  <div className="sideMenuBtnLeft">
                    <div
                      className={`sideMenuPlanetIcon sideMenuIcon${planet.name}`}
                    ></div>
                    <p className="sideMenuPlanetName">{planet.name}</p>
                  </div>
                  <div className="sideMenuArr"></div>
                </button>
              </Link>
            ))}
          </div>
        ) : null}
      </header>
    </>
  );
}
