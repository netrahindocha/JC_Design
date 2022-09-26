import React from "react";
import charts from "../images/charts.png";
import homeanime from "../images/homeanime.gif";
import infoTemp from "../images/infoTemp.jpg";
import instagram from "../images/instagram.png";

const homepage = () => {
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
                <li id="login">Login</li>
                <li id="sign-up">Sign Up</li>
            </ul>
        </div>
    </nav>

    {/* Home Section */}
    <div className="homeSection flexRow">
        <div className="flexCol">
            <p className="analyseStock">Analyse Stock <span>Charts.</span></p>
            <br/>
            <div className="stockSearch flexRow">
                <i className="fa fa-search searchIcon" style={{fontSize: "1em"}}></i>
                <input type="searchHidden" name="searchHidden" id="searchHidden" placeholder="Stock Search"/>
            </div>
            <br/>
            <br/>
            <br/>
            <p className="explore"><strong>Explore: </strong><a href="/">Markets Today</a>, <a href="/">Best Intraday
                    Stocks</a>,
                <a href="/"> Futures Dashboard</a>, <a href="/">Sector Performance</a>, <a href="/">Option Strategy
                    Builder </a>
                and more!
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="flexRow">
                <div className="vertLine flexCol">
                    <p className="title semibold">TradeMates</p>
                    <p className="smalldesc semibold">Best Stock Scanner For Trading</p>
                </div>
                <img src={charts} alt="" width="100px"/>
            </div>
        </div>
        <div>
            <img src={homeanime} alt=""/>
        </div>
    </div>

    {/* Info Section */}
    <div className="flexRow infoSection">
        <div className="realTimeChart"><img src={infoTemp} alt=""/></div>
        <div className="flexCol infoContent">
            <p className="blueClr semibold midFont">What is TradeMates?</p>
            <p>TradeMates is one of the most advanced Intraday Stock market screener for scanning multiple stocks for
                trading opportunities in Indian Stock Markets. TradeMates has many pre-made scans on technical analysis
                inbuild which helps you to select best stocks for trading including next day stocks.</p>
            <br/>
            <br/>
            <p className="greyFont">Explore Advanced Features</p>
            <button type="submit" id="loginBtn">Login</button>
        </div>
    </div>

    {/* More Info Section */}
    <div className="moreInfoSection lightgreybg flexCol">
        <p className="midFont semibold">Real Time Stock Screener - TradeMates</p>
        <br/>
        <p>TradeMates helps you to select stocks for intraday trading and Short term Swing Trading using various price
            action as well as other technical parameters. TradeMates is an advanced stock market scanner for trading
            which helps you to find trading opportunities in Real Time.</p>
        <img src="" alt="" id="moreInfoChart"/>
    </div>

    {/* Get Connected Section */}
    <div className="getConnectedSection flexRow">
        <p className="semibold">Get connected with us on social networks!</p>
        <div className="socialIcons flexRow">
            <div><button className="fa fa-facebook-f" id="facebook" style={{fontSize: "1em"}}></button></div>
            <div><button className="fa fa-twitter" id="twitter" style={{fontSize: "1em"}}></button></div>
            <div><img src={instagram} alt="" width="37em" height="37.2em" id="instagram"></img></div>
            <div><button className="fa fa-whatsapp" id="whatsapp" style={{fontSize: "1.3em"}}></button></div>
        </div>
    </div>

    {/* Footer Section */}
    <footer className="footerSection blackbg flexCol">
        <div className="topPart flexRow">
            <div className="disclaimer flexCol">
                <h3>DISCLAIMER</h3>
                <p className="miniFont lineheight">This tool is meant to filter stocks based on certain technical parameters and in no way provides any
                    advice to buy or sell stocks. Any one using this tool, will be solely responsible for profits or losses arising from his trades.</p>
            </div>
            <div className="tradematesFooter flexCol">
                <h3>WHAT IS TRADEMATES?</h3>
                <p className="miniFont lineheight">TradeMates is a stock market Analytics platform that provides complete 360 degree view of markets. Its one of the most advanced stock scanner with hundreds of pre-made scans.</p>

            </div>
            <div className="usefulLinks flexCol">
                <h3>USEFUL LINKS</h3>
                <div className="miniFont"><a href="/">Your Account</a></div>
                <div className="miniFont"><a href="/">Become an Affiliate</a></div>
                <div className="miniFont"><a href="/">Contact Us</a></div>
                <div className="miniFont"><a href="/">Partnerships</a></div>
                <div className="miniFont"><a href="/">Suggest a Feature</a></div>
            </div>
            <div className="contact flexCol">
                <h3>CONTACT</h3>
                <div><i className="fa fa-home icons" style={{fontSize: "1.3em"}} id="homeIcon"></i><span className="miniFont home">Jamnagar</span></div>
                <div><i className="fa fa-envelope icons" style={{fontSize: "1.1em"}} id="emailIcon"></i><a href="/" className="miniFont email">info@trademates.com</a></div>
                <div><i className="fa fa-phone icons" style={{fontSize: "1.3em"}} id="callIcon"></i><span className="miniFont call"></span>+91 xxxxxxxxxx</div>
                <div><i className="fa fa-print icons" style={{fontSize: "1.3em"}} id="printIcon"></i><span className=" miniFont print"></span>+91 xxxxxxxxxx
                </div>
            </div>
        </div>
        <div className="endPart flexCol smallFont">
            <div className="copyright">&copy; 2022 TradeMates.com</div>
            <div className="madeIn">Made with <i className="fa fa-heart" style={{fontSize: "1em", color: "rgb(129, 181, 192)"}}></i> in
                India - sponserName</div>
        </div>
    </footer>
        </>
    );
};

export default homepage;
