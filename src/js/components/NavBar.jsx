import React from 'react'

const NavBar = () => {
return (
<div classname="row d-flex justify-content-between">
  <nav className="navbar m-2 navbar-expand-sm rounded-3 navbar-light bg-secondary p-2">
    <div className="container">
      <a className="navbar-brand" href="https://media1.tenor.com/m/uDcqZD_xrKwAAAAC/what-are-you-looking-for-brandon-james.gif">Start Bootstrap</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="https://media1.tenor.com/m/RV-BrpRJO8wAAAAd/looking-for-something-specific-or-just-browsing-sarah-black.gif" aria-current="page">Home
              <span className="visually-hidden">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://media1.tenor.com/m/vMvR0gEolCEAAAAC/nothing-to-see-here-explosion.gif">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://media1.tenor.com/m/4X9whOiMKWsAAAAd/move-along-nothing-to-see-here.gif">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://media1.tenor.com/m/2_0ERpQN2rsAAAAC/eww-ugh.gif">Contact</a>
          </li>
        </ul>
      </div>
  </nav>
</div>

)}
export default NavBar;