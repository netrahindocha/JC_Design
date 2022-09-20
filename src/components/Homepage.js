import React from 'react'
import charts from './charts.png'
import homeanime from './homeanime.gif'
import growmoney from './growmoney.gif'

const homepage = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar">
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
                    <br />
                    <div className="stockSearch flexRow">
                        <i className="fa fa-search searchIcon" style={{fontSize: '1em'}}></i>
                        <input type="searchHidden" name="searchHidden" id="searchHidden" placeholder="Stock Search" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <p className="explore"><strong>Explore: </strong><a href="/">Markets Today</a>, <a href="/">Best Intraday
                        Stocks</a>, <a href="/">Futures Dashboard</a>, <a href="/">Sector Performance</a>, <a href="/">Option Strategy Builder</a> and more!
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="flexRow">
                        <div className="vertLine flexCol">
                            <p className="title semibold">TradeMates</p>
                            <p className="smalldesc semibold">Best Stock Scanner For Trading</p>
                        </div>
                        <img src={charts} alt="" width="100px" />
                    </div>
                </div>
                <div>
                    <img src={homeanime} alt="" />
                </div>
            </div>

            {/* Info Section */}
            <div className="infoSection lightgreybg flexRow">
                <img src={growmoney} alt="Not visible" />
                <div className="flexCol">
                    <h2>What is TradeMates?</h2>
                    <p>TradeMates is one of the most advanced Intraday Stock market screener for scanning multiple stocks for
                        trading opportunities in Indian Stock Markets. TradeMates has many pre-made scans on technical analysis
                        inbuild which helps you to select best stocks for trading including next day stocks.</p>
                    <br />
                    <br />
                    <br />
                    <p>Explore Advanced Features</p>
                    <button type="submit" id="loginBtn">Login</button>
                </div>
            </div>

            {/* More Info Section */}
            <div className="moreInfoSection">
                <h2>Real Time Stock Screener - TradeMates</h2>
                <p>TradeMates helps you to select stocks for intraday trading and Short term Swing Trading using various price
                    action as well as other technical parameters. TradeMates is an advanced stock market scanner for trading
                    which helps you to find trading opportunities in Real Time.</p>
                <img src="" alt="" id="moreInfoChart" />
            </div>

            {/* Get Connected Section */}
            <div className="getConnectedSection lightgreybg">
                <p>Get connected with us on social networks!</p>
                <div className="socialIcons flexRow">
                    <div className="facebook"><button className="fa fa-facebook-f" style={{fontSize: '1em'}}></button></div>
                    <div className="twitter"><button className="fa fa-twitter" style={{fontSize: '1em'}}></button></div>
                    <div className="instagram"><button className="fa fa-instagram" style={{fontSize: '1em'}}></button></div>
                    <div className="whatsapp"><button className="fa fa-whatsapp" style={{fontSize: '1em'}}></button></div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footerSection blackbg">
                <div className="disclaimer">
                    <h5>DISCLAIMER</h5>
                    <p>This tool is meant to filter stocks based on certain technical parameters and in no way provides any
                        advice to buy or sell stocks. Any one using this tool, will be solely responsible for profits or losses
                        arising from his trades.</p>
                </div>
                <div className="trademates">
                    <h5>WHAT IS TRADEMATES?</h5>
                    <p>TradeMates is a stock market Analytics platform that provides complete 360 degree view of markets. Its
                        one of the most advanced stock scanner with hundreds of pre-made scans.</p>
                </div>
                <div className="usefulLinks">
                    <a href="/">Your Account</a>
                    <a href="/">Become an Affiliate</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Partnerships</a>
                    <a href="/">Suggest a Feature</a>
                </div>
                <div className="contact">
                    <div className="home"><i className="fa fa-home" style={{fontSize: '1.3em'}} id="homeIcon"></i>Jamnagar</div>
                    <div className="email"><i className="fa fa-envelope" style={{fontSize: '1em'}}
                        id="emailIcon"></i>info@trademates.com</div>
                    <div className="call"><i className="fa fa-phone" style={{fontSize: '1.3em'}} id="callIcon"></i>+91 xxxxxxxxxx</div>
                    <div className="print"><i className="fa fa-print" style={{fontSize: '1.3em'}} id="printIcon"></i>+91 xxxxxxxxxx
                    </div>
                </div>
                <div className="endPart">
                    <div className="copyright">&copy; 2022 TradeMates.com</div>
                    <div className="madeIn">Made with <i className="fa fa-heart" style={{fontSize: '1em', color: 'rgb(150, 180, 186)'}}></i> in
                        India - sponserName</div>
                </div>
            </footer>
            <div className="chatBotFixed">
                <button className="chatBot"><span className="chatBotIcon"></span></button>
            </div>
        </>
    )
}

export default homepage