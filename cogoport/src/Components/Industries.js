import React from 'react'
import '../Styles/Industries.css'
export const Industries = () => {
  return (
    <div className='industries'>
        <div className='outer_box'>
            <h3 className='text1'>Industries Served</h3>
            <div className='inner_box'>
                <div className='image_box'>
                    <img src='https://www.cogoport.com/images/chemical.svg' alt='chemical'/>
                    <div className='text2'>chemicals</div>
                </div>
                <div className='image_box'>
                    <img src='https://www.cogoport.com/images/paracetamol.svg' alt='paracetamol'/>
                    <div className='text2'>Pharamaceuticals</div>
                </div>
                <div className='image_box'>
                    <img src='https://www.cogoport.com/images/electronics.svg' alt='electronics'/>
                    <div className='text2'>Electronics</div>
                </div>
                <div className='image_box'>
                <img src="https://www.cogoport.com/images/whitegoods.svg" alt="whitegoods" style={{width: '84px', marginLeft: '8px'}}/>
                    <div className='text2'>White Goods</div>
                </div>
                <div className='image_box'>
                <img src="https://www.cogoport.com/images/textiles.svg" alt="textiles" style={{width: '88px', marginLeft: '6px'}}/>
                    <div className='text2'>Textiles</div>
                </div>
                <div className='image_box'>
                    <img src='https://www.cogoport.com/images/manufactoring.svg' alt='manufactoring'/>
                    <div className='text2'>Manufacturing</div>
                </div>
                <div className='image_box'>
                <img src="https://www.cogoport.com/images/agriculture.svg" alt="agriculture"/>
                    <div className='text2'>Agriculture</div>
                </div>
            </div>

        </div>
    </div>
  )
}
export default Industries;