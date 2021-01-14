import React, { useEffect, useState } from 'react'
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../firebase'
import '../styles/feed.css'
import FlipMove from 'react-flip-move'

const Feed = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot)=>
        setPosts(snapshot.docs.map((doc)=> doc.data()))    
        );
     }, [])
    // useEffect(() => {
    //     db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
    //         setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
    //     ))
    //  }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h3>Home</h3>
            </div>
            <TweetBox />
            <FlipMove>

            {posts.map(post=>(
            <Post
             displayName={post.displayName} 
             username={post.username}
             verified={post.verified}
             text={post.text}
             avatar={post.avatar}
             image={post.image}
             />
             ))}
            </FlipMove>
        

             
        </div>
    )
}

export default Feed
