import React, { Component } from "react";
import filter from "../assets/wimp-site-filter.png";
import navigation from "../assets/wimp-site-navigation.png";
import redundant from "../assets/wimp-site-redundant.png";
import search from "../assets/wimp-site-search.png";
import spacing from "../assets/wimp-site-spacing.png";

export default class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.options.filter,
    };
  }

  options = {
    filter: {
      img: filter,
      text: "Filtering results by category should be an easily accessible option but currently it is hidden halfway down the page which limits efficiency and learnability",
      title: "Filtering Content",
    },
    search: {
      img: search,
      text: "The search bar is not located at the top of the screen as one expects from using other video streaming sites",
      title: "Search Bar Placement",
    },
    navigation: {
      img: navigation,
      text: "Navigation options are not clearly indicated and there are confusing redundancies, which limit efficiency and satisfaction",
      title: "Navigation",
    },
    redundant: {
      img: redundant,
      text: "Each video item includes the date which creates redundancies and limits satisfaction",
      title: "Redundant Content",
    },
    spacing: {
      img: spacing,
      text: "Video links are close together which increases chances of user error",
      title: "Spacing Issues",
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
        <div className="section-title">Problems</div>
        <div className="section-subtitle">
          Click on the buttons to explore some of the problems on the site!
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
          <div className="section-image">
            <img src={current.img} alt="" id="problem-img" />
          </div>
          <div className="section-text section-caption">
            {current.text}
          </div>
        </div>

      </div>
    );
  }
}
