import classes from './Profile.module.css';
import MyPosts from "./Profile/MyPosts/MyPosts";
let Profile = () =>{
    return (<div className={classes.content}>
        <div>
            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300' alt=''/>
        </div>

        <div>
            ava+deskr
        </div>
        <MyPosts/>
    </div>);
}

export default Profile;