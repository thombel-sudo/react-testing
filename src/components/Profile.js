import classes from './Profile.module.css';
let Profile = () =>{
    return (<div className={classes.content}>
        <div>
            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300' alt=''/>
        </div>

        <div>
            ava+deskr
        </div>

        <div>
            MyPosts
            <div>
                New Post
            </div>

            <div className={classes.posts}>
                <div className={classes.item}>
                    post 1
                </div>

                <div className={classes.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>);
}

export default Profile;