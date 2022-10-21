import React, { Component } from "react";
import desktop from "../assets/desktop-hifi.png";
import mobile from "../assets/mobile-hifi.png";
import tablet from "../assets/tablet-hifi.png";

export default class HiFi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.options.desktop,
    };
  }

  options = {
    desktop: {
      id: "desktop-hifi-img",
      img: desktop,
      title: "Desktop",
      text: "Desktop view of the site",
    },
    tablet: {
      id: "tablet-hifi-img",
      img: tablet,
      title: "Tablet",
      text: "Tablet view of the site",
    },
    mobile: {
      id: "mobile-hifi-img",
      img: mobile,
      title: "Mobile",
      text: "Mobile view of the site",
    },
  };
  render() {
    const current = this.state.active;
    const toggleContent = (button) => {
      this.setState((state) => {
        return { ...state, active: this.options[button] };
      });
    };
    return (
      <div>
        <div className="section-title">High Fidelity Prototypes</div>
        <div className="section-subtitle">
          Click on the buttons to explore the prototype on different devices!
        </div>
        <div className="button-menu">
          {Object.keys(this.options).map((elt) => {
            return (
              <div
                className="section-button"
                onClick={() => toggleContent(elt)}
              >
                {this.options[elt].title}
              </div>
            );
          })}
        </div>
        <div className="section-container">
          <div className="section-image lofi-image">
            <img src={current.img} alt="" className={current.id} />
          </div>
          <div className="section-text section-caption">{current.text}</div>
        </div>
      </div>
    );
  }
}
