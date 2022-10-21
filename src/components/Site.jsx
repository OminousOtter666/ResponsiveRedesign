import React, { Component } from 'react'

export default class Site extends Component {
  render() {
    return (
      <div className='site-container'>
        <div className='site-button' onClick={() => window.open("https://www.wimp.com", '_blank')}>View the Responsive Redesign!</div></div>
    )
  }
}
