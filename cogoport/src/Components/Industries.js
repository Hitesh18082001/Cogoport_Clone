import React from 'react'
import '../Styles/Industries.css'
export const Industries = () => {
    return (
        <div className='industries_main_box'>
            <div className='industries_outer_box'>
                <h3 >Industries Served</h3>
                <div className='industries_inner_box'>
                    <div className='industries_image_box'>
                        <img src='https://www.cogoport.com/images/chemical.svg' alt='chemical' />
                        <div className='industries_text_box'>chemicals</div>
                    </div>
                    <div className='industries_image_box'>
                        <img src='https://www.cogoport.com/images/paracetamol.svg' alt='paracetamol' />
                        <div className='industries_text_box'>Pharamaceuticals</div>
                    </div>
                    <div className='industries_image_box'>
                        <img src='https://www.cogoport.com/images/electronics.svg' alt='electronics' />
                        <div className='industries_text_box'>Electronics</div>
                    </div>
                    <div className='industries_image_box'>
                        <img src="https://www.cogoport.com/images/whitegoods.svg" alt="whitegoods" style={{ width: '84px', marginLeft: '8px' }} />
                        <div className='industries_text_box'>White Goods</div>
                    </div>
                    <div className='industries_image_box'>
                        <img src="https://www.cogoport.com/images/textiles.svg" alt="textiles" style={{ width: '88px', marginLeft: '6px' }} />
                        <div className='industries_text_box'>Textiles</div>
                    </div>
                    <div className='industries_image_box'>
                        <img src='https://www.cogoport.com/images/manufactoring.svg' alt='manufactoring' />
                        <div className='industries_text_box'>Manufacturing</div>
                    </div>
                    <div className='industries_image_box'>
                        <img src="https://www.cogoport.com/images/agriculture.svg" alt="agriculture" />
                        <div className='industries_text_box'>Agriculture</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Industries;