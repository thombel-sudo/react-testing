import classes from './Post.module.css';

let Post = () => {
    return (
        <div className={classes.item}>
            <img
                src='https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=1.0&px=999'
                alt=''/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;