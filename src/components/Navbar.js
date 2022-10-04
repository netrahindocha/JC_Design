import React from 'react'

const Navbar = () => {
  return (
    <>
        {/* Navbar */}
    <nav className="navbar defbgClr">
        <div className="logo">
            <p className="semibold">TradeMates</p>
        </div>
        <div className="menuBox">
            <ul>
                <li id="features">Features</li>
                <li id="business">Business</li>
                <li id="about">About</li>
                <li id="pricing">Pricing</li>
                <li id="login"><a href="/loginpage">Login</a></li>
                <li id="sign-up">Sign Up</li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar