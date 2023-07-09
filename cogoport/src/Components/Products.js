import React from 'react'
import Card from './Card.js'
import '../Styles/Products.css'
export const Products = () => {
  return (
    <div className='maincontainer'>
     <div style={{marginTop:"40px"}}>
        <div class="innercontainer">
            <div class="textcontainer">
                <h2>One Stop Solution for Your Supply Chain</h2>
                <span>Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.</span>
            </div>
            <div class="imagecontainer">
                <img alt="productCheck" loading="lazy" width="480" height="360" decoding="async" data-nimg="1" class="styles_product_image__H5xch" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fmap-supply-chain.png&w=640&q=75" />
            </div>
        </div>
     </div>
     <div className='products'>
      <h3 className='heading'>Our Products</h3>
        <div className='outerbox'>
          <div className='column'>
            <div className='row'>
              <h4 className='element_heading'>End to End Cross Logistics </h4>
             <div className='card_special_container'></div>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            <div className='row'>
              <h4 className='element_heading'>Domestic Logistics </h4>
              <Card/>
              <Card/>
           
            </div>
            <div className='row'>
              <h4 className='element_heading'>Supply chain Solutions </h4>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
            <div className='row'>
              <h4 className='element_heading'>Financial Services </h4>
              <Card/>
              <Card/>
              
            </div>
            <div className='row'>
              <h4 className='element_heading'>Trade Management Solutions </h4>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}
export default Products;
