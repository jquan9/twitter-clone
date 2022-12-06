import React from 'react';
import './Post.css';
import { Avatar } from "@mui/material"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post( {
    displayName, username, verified, text, image, avatar}) {
  return (
    <div className="post">
        <div className="post__avatar">
            <Avatar src="./headshot-modified.png" />  
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Jordan Quan{" "}
                        <span className="post__headerSpecial">
                            <VerifiedIcon className="post__badge" /> @j.w.quan 1h
                        </span>
                    </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>I love front-end development!!!</p>                
                    </div>
                    </div>
                    <img src="https://dgtzuqphqg23d.cloudfront.net/e76_W6k3LvSVSZVMCl2WpGoZJfQ6KRTclkBGRE-Vgd4-2048x1536.jpg" alt="TweetPhoto" />
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon />
                        <RepeatIcon />
                        <FavoriteBorderIcon />
                        <PublishIcon />
            </div>
        </div>
    </div>
  )
}

export default Post;