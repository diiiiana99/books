import React, { useState } from "react";
import {
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    WeiboShareButton,
    PocketShareButton,
    InstapaperShareButton,
    HatenaShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    InstapaperIcon,
    WeiboIcon,
    HatenaIcon,
  } from "react-share"


function Footer() {
    const shareUrl = 'http://localhost:3002/';
    const title = 'Book-Report';
    return(
        <React.Fragment>
            <div
                style={{
                borderBottom: "2px solid black",
                paddingBottom: "10px",
                marginBottom: "12px",
            }}>
        </div>
        <div>
        <label className="share-label">SHARE:</label>
          <FacebookShareButton
            className="share-button"
            url={shareUrl}
            quote={title}
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>
            
          <TwitterShareButton
            className="share-button"
            url={shareUrl}
            title={title}
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <LinkedinShareButton 
            className="share-button"
            url={shareUrl} 
            title={title}
            >
            
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>

          <WhatsappShareButton
            className="share-button"
            url={shareUrl}
            title={title}
            >
              <WhatsappIcon size={40} round/>
          </WhatsappShareButton>

          <InstapaperShareButton 
            className="share-button"
            url={shareUrl} 
            title={title}
            >
            
            <InstapaperIcon size={40} round />
          </InstapaperShareButton>
        
          <WeiboShareButton 
            className="share-button"
            url={shareUrl} 
            title={title}
            >
            
            <WeiboIcon size={40} round />
          </WeiboShareButton>


        </div>
        <p>Book Information Provided By the Google Books API</p>
        <p>Developed by: Alan, Henry, Nathalia</p>  

        </React.Fragment>

    )
}

export default Footer;
