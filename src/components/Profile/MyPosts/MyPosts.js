import classes from './MyPosts.module.css';
import Post from "./Post/Post";
let MyPosts = () =>{
    return (
        <div>
            MyPosts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div className={classes.posts}>
                <Post message="Hi! How are you?" likecount="20"/>
                <Post message="It's my first post" likecount="5"/>

            </div>
        </div>
        );
}

export default MyPosts;