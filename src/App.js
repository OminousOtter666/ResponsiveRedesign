import "./App.css";
import React from "react";
import { HashLink } from "react-router-hash-link";
import Wimp from "./components/Wimp";
import Problems from "./components/Problems";
import Accessibility from "./components/Accessibility";
import LoFi from "./components/LoFi";
import Style from "./components/Style";
import HiFi from "./components/HiFi";
import Site from "./components/Site";

function App() {
  return (
    <div className="app">
      <div className="sidenav-container">
        <div className="sidenav-title">
          <div>Responsive</div>
          <div>Redesign</div>
        </div>
        <div className="sidenav-options">
          <div className="sidenav-button">
            <HashLink smooth to="/#webpage">
              - Webpage
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#problems">
              - Problems
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#accessibility">
              - Accessibility
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#lofi">
              - LoFi Prototypes
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#style">
              - Design Style
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#hifi">
              - HiFi Prototypes
            </HashLink>
          </div>
          <div className="sidenav-button">
            <HashLink smooth to="/#site">
              - Site
            </HashLink>
          </div>
        </div>
      </div>
      <div className="content">
        <div id="webpage">
          <Wimp />
        </div>
        <div id="problems">
          <Problems />
        </div>
        <div id="accessibility">
          <Accessibility />
        </div>
        <div id="lofi">
          <LoFi />
        </div>
        <div id="style">
          <Style />
        </div>
        <div id="hifi">
          <HiFi />
        </div>
        <div id="site">
          <Site />
        </div>
      </div>
    </div>
  );
}

export default App;
