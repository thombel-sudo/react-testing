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
                <Post/>
                <Post/>

            </div>
        </div>
        );
}

export default MyPosts;