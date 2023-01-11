import React from 'react'
import Navbar from '../components/Navbar'
import img1 from "../assets/presentience.jpg"

const Contacts = () => {
    return (
        <>
            {window.location.pathname !== "/" && <Navbar />}
            <div>
                <h1 className="text-center py-5 fw-bolder">SERVICES</h1>
                <p className='fs-1 text-center text-black-50'>Almost everyone will find something in our services worth paying for</p>
            </div>
            <div className='d-flex justify-content-around'>
                <div className='some ' style={{ paddingRight: '100px', paddingTop: '100px' }}>
                    <h3># Interaction Design</h3>
                    <h3># Graphic Design</h3>
                    <h3># Wireframes and Prototypes</h3>
                    <h3># Visual Design</h3>
                </div>
                <img src={img1} alt='UI/UX Design' style={{ height: "200px", width: "40%", paddingLeft: '50px', paddingTop: '100px' }} />
            </div>
        </>
    )
}

export default Contacts