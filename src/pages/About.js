import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/profile_pic.JPG"; 
export default class About extends Component {
  render() {
    return (
    <div>
      <div>
      <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={profilePic}
                alt="Profile Pic"
                ></img>
            </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Helena Teixeira-Dasilva</div>
            <div className="brief_description">
              I am a rising junior at Washington University in St. Louis majoring
              in computer science and mechanical engineering. My interests are in
              systems, sensors and robotics. I am also a runner and love to bake 
              and watch movies.
            </div>
          </div>
        </div>
      </div> 
    </div>
    )
  }
}