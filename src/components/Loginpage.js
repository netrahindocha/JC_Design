import React from 'react'
import loginpage from '../images/loginpage.jpg';
import google from '../images/google.ico';
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
    <>
    <div class="container">
        <div class="loginSection lightgreybg">
            <div class="flexRow">
                <img src={loginpage} id="loginImage" alt=""/>
                <div class="loginContent">
                    <h4 class="smallFont">TradeMates</h4>
                    <div class="grid loginWith justifyCenter">

                        <div class="googleBtn">
                            <img src={google} class="googleIcon" alt=""/>
                            <div class="textWrap">Sign in with Google</div>
                        </div>

                    </div>
                    <p class="semibold">or</p>
                    <div class="greyFont bottomPadding">Login with Email</div>
                    <div class="flexCol textbox justifyCenter">

                        <div class="flexCol alignCenter">
                            <input type="text" name="emailAddress" id="emailAddress" placeholder="Email address"/>
                            <input type="password" name="emailPassword" id="emailPassword" placeholder="Password"/>
                        

                            <div class="flexRow check">
                                <button class="loginBtn">Login</button>
                                <Link class="blueFont forgotPass" to="/">Forgot password?</Link>
                            </div>
                            
                            <div class="greyFont leftalign">New User? <Link to="/" class="blueFont">Click here</Link> to signup</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Loginpage