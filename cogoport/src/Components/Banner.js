import React from 'react'
import '../Styles/Banner.css'
import whatsapplogo from "../Logo/whatsapplogo.svg"
import downarrow from "../Logo/downarrowlogo.svg"
export const Banner = () => {
  return (
    <div className='container1'>
    <div className='container2'>
    <div className='container3'>
    <h1>Grow Faster, Go Global.</h1>
     <p className='paragraph'>Strengthen your Supply Chain, and Scale your Business<br/>
      with Reliable Shipping and Cashflows.</p>
      <div >
                        <form>
                            <p>Talk to us now!</p>
                            <div className='whatsapp-container'>
                                <img src={whatsapplogo} className='whatsapp-logo' />
                                <div class="form-group">
                                    <select class="form-control" id="countryCode">
                                        <option value="+91">+91</option>
                                        <option value="+92">+92</option>
                                        <option value="+93">+93</option>
                                        <option value="+94">+94</option>
                                        <option value="+95">+95</option>
                                    </select>
                                </div>
                                
                                <div className='downarrow' role="button" aria-label="button" tabindex="0">
                                <img src={downarrow} className='downarrow' />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="phoneNumber" value={"Whatsapp number"}/>
                                    
                                </div>
                                <button class="btn btn-sm btn-success rounded-pill">Get Started</button>
                            </div>   
                        </form>
                    </div>
      </div>
      <video autoPlay muted loop="" playsinline="" class="banner_video_1"><source src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_desktop_2_webm.webm" type="video/webm"/></video> 
      {/* <video autoPlay muted loop="" playsinline="" class="styles_mobile_image__nHLp0"><source src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/mobile-track-shipment.webm" type="video/webm"/></video>  */}
      <video autoPlay muted loop playsInline className='banner_video_2'>
                    <source src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/mobile-track-shipment.webm" type='video/webm'/>
      </video>
    </div>
    </div>

  )
}
export default Banner;