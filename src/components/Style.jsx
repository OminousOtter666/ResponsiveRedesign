import React, { Component } from "react";
import components from "../assets/components.png";

export default class Style extends Component {
  render() {
    return (
      <div>
        <div className="section-title">Style</div>
        <div className="section-subtitle">
          The image below contains the style guide I used to drive my high
          fidelity designs!
        </div>
        <div className="section-image">
          <img src={components} alt="style-sheet" id="component-img" />
        </div>
      </div>
    );
  }
}
