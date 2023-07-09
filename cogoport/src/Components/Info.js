import React from 'react'
import '../Styles/Info.css'
export const Info = () => {
  return (
    <div>
        <div className="info_work">
            <div className="info_text">
                <h2 className="info_count">180+</h2>
                <h4>Countries Served</h4>
            </div>
                <div className="info_text">
                    <h2 className="info_count">10,000</h2>
                    <h4>Ports Pairs Served</h4>
                </div>
                    <div class="info_text">
                        <h2 class="info_count">30,000+</h2>
                        <h4>Tons of Air Cargo Moved</h4>
                    </div>
                        <div class="info_text">
                            <h2 class="info_count">700,000</h2>
                            <h4>Containers Moved</h4>
                        </div>
        </div>
   
        <div class="curve">
            <div class="round">
            </div>
        </div>
    </div>
    
  )
}
export default Info;