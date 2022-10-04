import React from "react";
import charts from "../images/charts.png";
import homeanime from "../images/homeanime.gif";
import infoTemp from "../images/infoTemp.jpg";

const homepage = () => {
    return (
        <>
    {/* Home Section */}
    <div className="homeSection flexRow">
        <div className="flexCol">
            <p className="analyseStock">Analyse Stock <span>Charts.</span></p>
            <br/>
            <div className="stockSearch flexRow">
                <i className="fa fa-search searchIcon"></i>
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
        </>
    );
};

export default homepage;
