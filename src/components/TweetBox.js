import { Button , Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import '../styles/tweetbox.css'
import db from '../firebase'
const TweetBox = () => {
    const [tweetMSG, setTweetMSG] = useState('')
    const [tweetPhoto, setTweetPhoto] = useState('')
    const handleTweet = (e)=>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Mulham Khalifa",
             username: "sadsyrianguy",
             verified: true,
             text: tweetMSG,
             avatar: "https://pbs.twimg.com/profile_images/571696895770411008/Ku6bNSQZ_400x400.jpeg",
             image: tweetPhoto

        })
        setTweetMSG('');
        setTweetPhoto('');
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/571696895770411008/Ku6bNSQZ_400x400.jpeg" />
                    <input type="text" placeholder="What's happening?" value={tweetMSG} onChange={(e )=> setTweetMSG(e.target.value)}/>
                </div>
                    <input className="tweetPhoto" type="text" placeholder="Enter a photo URL here" value={tweetPhoto} onChange={(e )=> setTweetPhoto(e.target.value)}/>
                    
                <Button onClick={handleTweet} type="submit" className="tweetBox__btn">Tweet</Button>
            </form>
        </div>
            
)
}

export default TweetBox
                    
                    
                  
                    
                   

                   
