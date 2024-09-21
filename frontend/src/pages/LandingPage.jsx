import React from 'react'
import "../App.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'



const LandingPage = () => {
    const router=useNavigate()
  return (
    <>
    <div className="landingPageContainer">
       <nav>
        <div className='navHeader'><h2>FaceConnect</h2></div>
        <div className='navlist'>
        <p onClick={() => {
                        router("/abc")
                    }}>Join as Guest</p>
            <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
        </div>
       </nav>


       <div className="landingMainContainer">
        <div>
            <h1 ><span style={{color:"#ff9839"}}>Connect</span> With Your Loved Ones</h1>
            <p>Cover a distance with FaceConnect VideoCall</p>
            <div role="button">
                <Link to="/auth">Get Started</Link>
            </div>
        </div>
        <div>
            <img src='/mobile.png' />
        </div>
       
       </div>
    </div>
    </>
  )
}

export default LandingPage
