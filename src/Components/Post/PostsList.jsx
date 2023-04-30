import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post'
import Modal from './Modal'
import classes from './PostsList.module.css'

function PostsList({post}){
    const [posts, setPosts] = useState([]);
    
    function addPostHandler(postData){
        
        setPosts((existingPosts) => [postData, ...existingPosts]);
        // ... fungsinya untuk memecah data dr array posts ke dlm postData
    }
    console.log(post)

    return(
        
        <div className={classes.posts}>
            <Post media={post}/>
        </div>
        
    );
}

export default PostsList;