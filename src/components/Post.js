import { Avatar, Button } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import React,{forwardRef} from 'react'
import '../styles/post.css'

const Post = forwardRef( ({displayName, username, verified, text, image, avatar}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
            <div className="post__avatar">
            <Avatar src={avatar} />
            </div>
            <div>
                        <h3>{displayName}<span className="post__headerSpan">
                             {verified && <VerifiedUserIcon className="post__badge" />}@{username}
                            </span>
                        
                        </h3>
            </div>
                       
                    </div>
                    <div className="post__headerDesc">
                        <p>{text} </p>
                    </div>
                </div>
                <img src={image} alt=""/>
                    
            <div className="post__footer">
                <Button>
                <ChatBubbleOutlineIcon fontSize="small" />
                </Button>
                <Button>
                <RepeatIcon fontSize="small" />
                </Button>
                <Button>
                <FavoriteBorderIcon fontSize="small" />
                </Button>
                <Button>
                <PublishIcon fontSize="small" />
                </Button>
            </div>
            </div>
            
            
        </div>
    )
})

export default Post