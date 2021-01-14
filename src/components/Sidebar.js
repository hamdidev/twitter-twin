import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import '../styles/sidebar.css'
import SideOption from './SideOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Button } from '@material-ui/core';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="slidebar__twitterIcon" />
            <div className="sidebar__options">
            <div>
            <SideOption active Icon={HomeIcon} text="Home"  />
            </div>
            <div>
            <SideOption Icon={SearchIcon} text="Explore" />
            </div>
            <div>
            <SideOption Icon={NotificationsNoneIcon} text="Notifications" />
            </div>
            <div>
            <SideOption Icon={MailOutlineIcon} text="Messages" />
            </div>
            <div>
            <SideOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            </div>
            <div>
            <SideOption Icon={ListAltIcon} text="Lists" />
            </div>
            <div>
            <SideOption Icon={PermIdentityIcon} text="Profile" />
            </div>
            <div>
            <SideOption Icon={MoreHorizIcon} text="More" />
            </div>


            <Button className="sidebar__tweet-btn" variant="outlined" fullWidth>Tweet</Button>
            </div>



          
            
        </div>
    )
}

export default Sidebar
