import React from 'react'
import '../Styles/Getstart.css'
export const Getstart = () => {
    return (
        <div className="getstart_outer_box">
            <div className="getstart_main_box">
                <div className="getstart_left_box">
                    <h2>Get Started Today</h2>
                    <span>
                        <div>
                            <p>Plan, Book and Finance your shipment in one place.</p>
                            Experience how Cogoport’s Global Trade Platform can Turbocharge your Business.
                        </div>
                    </span>
                    <a href="https://app.cogoport.com/en-IN/signup" target="_blank" class="getstart_link_box" >Get Started
                    </a>
                </div>
                <div className="getstart_gif_box">
                    <img alt="productCheck" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Ftrade-tech-home-1.webp&w=384&q=75" loading="lazy" width="280" height="360" decoding="async" data-nimg="1" class="getstart_image" />
                </div>
            </div>
        </div>

    )
}
export default Getstart