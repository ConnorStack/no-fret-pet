import React from "react";


export default function Navbar() {

  return (
  <nav className="nav">
    <a href="/"><img className="webIcon" src={window.location.origin + '/img/cat-and-dog.png'} /></a>
    <ul>
      <li><a href="/myPets">My Pets</a></li>
      <li><a href="/myProducts">My Products</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/"><img className="userIcon" src={window.location.origin + '/img/paw.png'} /></a></li>
    </ul>
  </nav>
  );
}
