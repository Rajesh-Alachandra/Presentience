import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='text-center text-white' style={{ backgroundColor: '#0d938a' }}>
                <div className='p-4 pb-0'>
                    <section className=''>
                        <p className='d-flex justify-content-center align-items-center'>
                            <span className='me-3'>Register for free</span>
                            <Link to="/Register">
                                <button type='button' className='btn btn-outline-info'>
                                    Sign up!
                                </button>
                            </Link>
                        </p>
                    </section>
                </div>

                <div className='text-center p-3' style={{ backgroundColor: "#0F857A" }}>
                    © 2023 Copyright:
                    <Link className='text-white ms-2' to='/'>
                        Presentience.com
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer