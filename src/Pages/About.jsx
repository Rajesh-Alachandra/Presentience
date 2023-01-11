import React from 'react'
import Navbar from '../components/Navbar'
import img1 from "../assets/presentience.jpg"

const About = () => {
    return (
        <>
            {window.location.pathname !== "/" && <Navbar />}
            <div>
                <div className="card p-3 ">
                    <div className="card-body ">
                        <h2 className="card-title fw-bold text-black-50">PRESENTIENCE</h2>
                        <h5 className="card-text py-4">There is no point in having a 5-year plan in the industry. With each step forward, the landscape you’re working on changes.So we have a pretty good idea of where we want to be for the next six months, where we want to be in the next 10 years. And every six months, we take another look at where we want to be in 10 years to plan out the next six months.<br />It’s a little bit short sighted and a little bit not. But any other approach guarantees everything you release is already obsolete.</h5>
                    </div>
                    <img src={img1} className="card-img-bottom" alt="Presentience" style={{ height: "100vh", width: "100%", padding: "5px" }} />
                </div>
            </div>
        </>
    )
}

export default About