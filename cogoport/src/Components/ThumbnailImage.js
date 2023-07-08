import React from 'react';
import '../Styles/ThumbnailImage.css';

const ThumbnailImage = () => {
  return (
    <div className="thumbnail-container">
      <img width="1232" height="450" src="https://www.cogoport.com/_next/image?url=https%3A%2F%2Fcdn.cogoport.io%2Fcms-prod%2Fcogo_public%2Fvault%2Foriginal%2Fhomepage-video.png&w=1920&q=75" alt="Thumbnail" className="thumbnail-image" />
      <img src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/play-button-white.png" alt="Play Button" className="play-button" />
      <div className="footer">
        <div className="footer-column">
          <h3 style={{fontSize:'24px', marginLeft:'50px',color:'white'}}>Grow Faster with Cogoport</h3>
          <p style={{fontSize:'12px',marginLeft:'50px'}}>Know more about Cogoport's Global Trade Platform&trade;</p>
        </div>
        <div className="footer-column">
          <button style={{fontSize:'12px',marginLeft:'50px'}} className="know-more-button">Know More
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft: '5px', marginTop: '2px'}}><path class="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right" d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05" fill-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailImage;
