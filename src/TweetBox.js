import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material"

function TweetBox() {
  return (
    <div className="tweetBox"> 
    <form>
        <div className="tweetBox_input">
            <Avatar src="./headshot-modified.png" />
            <input placeholder="What's Happening?"></input>
        </div>
            <input 
                className="tweetBox_imageInput" 
                placeholder="Optional: Enter Image URL"
                type="text" />
            <Button className="tweetBox_tweetButton">Tweet</Button>
    </form>
    </div>
  )
}




export default TweetBox;
