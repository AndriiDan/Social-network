import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log("RENDER Profile");
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;