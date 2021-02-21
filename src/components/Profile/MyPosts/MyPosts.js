import classes from './MyPosts.module.css';
import Post from "./Post/Post";
let MyPosts = () =>{
    return (
        <div>
            MyPosts
            <div>
                New Post
            </div>

            <div className={classes.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
        );
}

export default MyPosts;