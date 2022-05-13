import React from "react";
import OIWC from "../Images/Home.jpg";

export default function Home() {
  return (
    <div className="container">
      <div>
        <img src={OIWC} style={{ width: `${ window.innerWidth < 960 ? window.innerWidth : 960 }px`, height: "auto", margin: '1em'}} />
      </div>

      <div>
        <h5>
        The International Women Club at Omaha (IWC) has been running for 30 years since 1992.
         We are a group of women from the U.S.A. and around the world who share activities that promote friendship and understanding. 
         Every two weeks, we organize various activities about the culture of the United States and different countries. 
         We help women from different countries adapt to life and study in the United States. 
         All of us enjoy different activities, and our purpose is to establish cross-cultural friendships; 
         help immigrants and refugees assimilate; help with, and encourage, learning English; 
         educate on health, climate, safety, education, and recreational issues; and have fun together. 
         Many women have, and continue to, benefit from this club.
        </h5>
      </div>
    </div>
  );
}
