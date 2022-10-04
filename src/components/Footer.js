import React from 'react';
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <>
        {/* Get Connected Section */}
    <div className="getConnectedSection flexRow">
        <p className="semibold">Get connected with us on social networks!</p>
        <div className="socialIcons flexRow">
            <div><button className="fa fa-facebook-f" id="facebook"></button></div>
            <div><button className="fa fa-twitter" id="twitter"></button></div>
            <div><img src={instagram} alt="" id="instagram"></img></div>
            <div><button className="fa fa-whatsapp" id="whatsapp"></button></div>
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
                <div className="miniFont"><a href="/account">Your Account</a></div>
                <div className="miniFont"><a href="/affiliate">Become an Affiliate</a></div>
                <div className="miniFont"><a href="/contact">Contact Us</a></div>
                <div className="miniFont"><a href="/partnerships">Partnerships</a></div>
                <div className="miniFont"><a href="/suggest">Suggest a Feature</a></div>
            </div>
            <div className="contact flexCol">
                <h3>CONTACT</h3>
                <div><i className="fa fa-home icons" id="homeIcon"></i><span className="miniFont home">Jamnagar</span></div>
                <div><i className="fa fa-envelope icons" id="emailIcon"></i><a href="/email" className="miniFont email">info@trademates.com</a></div>
                <div><i className="fa fa-phone icons" id="callIcon"></i><span className="miniFont call"></span>+91 xxxxxxxxxx</div>
                <div><i className="fa fa-print icons" id="printIcon"></i><span className=" miniFont print"></span>+91 xxxxxxxxxx
                </div>
            </div>
        </div>
        <div className="endPart flexCol smallFont">
            <div className="copyright">&copy; 2022 TradeMates.com</div>
            <div className="madeIn">Made with <i className="fa fa-heart heartIcon"></i> in
                India - sponserName</div>
        </div>
    </footer>
    </>
  )
}

export default Footer