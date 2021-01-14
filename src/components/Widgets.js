import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import { TwitterTimelineEmbed, TwitterHashtagButton,TwitterShareButton } from 'react-twitter-embed';
import '../styles/widgets.css'
const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__search" />
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widgets__container">
                <h2>What's happening?</h2>

             <TwitterTimelineEmbed
            sourceType="profile"
            screenName="nixcraft"
            options={{height: 400}}
            />
             
            <TwitterHashtagButton
            tag={'cybersecurity'}
           />
            <TwitterShareButton
            url={'https://facebook.com/saurabhnemade'}
            options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
            />
  
            </div>
            
        </div>
    )
}

export default Widgets
