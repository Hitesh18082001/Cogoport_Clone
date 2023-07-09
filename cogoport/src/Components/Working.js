import React from 'react'
import '../Styles/Working.css'
export const Working = () => {
  return (
    <div className="working.main_container">
        <div className="working_flex_box_container">
            <h3 className="working_text_container">How it Works</h3>
            <div className="working_outer_button_container">
                <button className="working_active_button" type="button">
                    <span className="working_inner_button">For Cargo Owners</span>
                </button>
                <button className="working_inactive_button" type="button">
                    <span className="working_inner_button">For Logistics Partners</span>
                </button>
            </div>
        </div>
    </div>
               
                    
  )
}
export default Working;