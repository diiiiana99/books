import React, { useState } from "react";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    WeiboShareButton,
    InstapaperShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    InstapaperIcon,
    WeiboIcon,
  } from "react-share"


function Footer() {
    const shareUrl = 'https://book-report-0.herokuapp.com/';
    const title = 'Find your next favorite read on Book-Report!';
    return(
        <React.Fragment>
        <div className="spacer"></div>
        <div className="spacer"></div>

        <div className="fixed-footer">
            {/* <div
                style={{
                borderBottom: "2px solid black",
                paddingBottom: "10px",
                marginBottom: "12px",
            }}>
        </div> */}
        <div>
        <label className="share-label">SHARE:</label>
          <FacebookShareButton
            className="share-button"
            url={shareUrl}
            quote={title}
          >
            <FacebookIcon size={30} round />
          </FacebookShareButton>
            
          <TwitterShareButton
            className="share-button"
            url={shareUrl}
            title={title}
          >
            <TwitterIcon size={30} round />
          </TwitterShareButton>

          <LinkedinShareButton 
            className="share-button"
            url={shareUrl} 
            title={title}
            >
            
            <LinkedinIcon size={30} round />
          </LinkedinShareButton>

          <WhatsappShareButton
            className="share-button"
            url={shareUrl}
            title={title}
            >
              <WhatsappIcon size={30} round/>
          </WhatsappShareButton>

          <InstapaperShareButton 
            className="share-button"
            url={shareUrl} 
            title={title}
            >
            
            <InstapaperIcon size={30} round />
          </InstapaperShareButton>
        
          <WeiboShareButton 
            className="share-button"
            url={shareUrl} 
            title={title}
            >
            
            <WeiboIcon size={30} round />
          </WeiboShareButton>


        </div>
        {/* <p>Book Information Provided By the Google Books API</p>
        <p>Developed by: Alan, Henry, Nathalia</p>  
 */}
        </div>

        </React.Fragment>

    )
}

export default Footer;
