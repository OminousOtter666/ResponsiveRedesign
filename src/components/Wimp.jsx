import React, { Component } from "react";
import wimp from "../assets/wimp-site.png";

export default class Wimp extends Component {
  render() {
    return (
      <div>
        <div className="section-title link" onClick={() => window.open("https://www.wimp.com", '_blank')}>Wimp.com</div>
        <div className="section-content">
          <div className="section-text">
            Wimp.com is a family-friendly video sharing site aimed at
            highlighting popular positive videos from around the world. My
            grandmother loves this site and will frequently send me links to
            their posted videos, but has expressed that often she will misclick
            and get lost on the site. After poking around, I found there to be a
            lot of room for improvement from a design perspective.
          </div>
          <div>
            <hr />
          </div>
          <div className="section-image">
            <img src={wimp} alt="wimp.com screenshot" id="wimp-site" onClick={() => window.open("https://www.wimp.com", '_blank')}/>
          </div>
        </div>
      </div>
    );
  }
}
