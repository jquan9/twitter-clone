import React from 'react'
import "./Widgets.css"
import { TwitterTimelineEmbed, 
  TwitterShareButton, 
  TwitterFollowButton, 
  TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text"></input>
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>
          <TwitterTweetEmbed tweetId={'1599393110785597440'}/>
          <TwitterTimelineEmbed
            screenType="profile"
            screenName='reactjs'
            options={{ height: 400}} />
          <TwitterShareButton url={"https://www.ubc.ca/"} options={{ text: "#Reactjs is awesome", via:"j.w.quan"}} />
        </div>
    </div>
  );
}

export default Widgets;