import React, { Component } from 'react'

export default class Accessibility extends Component {
  render() {
    return (
      <div>
        <div className="section-title">Accessibility</div>
        <div className='section-subtitle'>
          Running a Web Accessibility Evaluation Tool on the site revealed a few more issues:
        </div>
        <div className='bullet-content'>
          <div>
            - Many linked images were missing alt text
          </div>
          <div>
            - The color pallette created low contrast errors
          </div>
          <div>
            - The evaluation revealed redundant links in the source code
          </div>
        </div>
      </div>
    )
  }
}
