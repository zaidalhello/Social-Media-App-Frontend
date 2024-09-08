import React from 'react'
import ProfileLeft from '../../components/ProfileComponents/ProfileLeft/ProfileLeft'
import './Profile.css'
import ProfileCard from '../../components/HomeComponents/ProfileSide/ProfileCard/ProfileCard'
import PostSide from '../../components/HomeComponents/PostSide/PostSide'
import NavSide from '../../components/HomeComponents/NavSide/NavSide'
const Profile = () => {
  return (
   <div className="Profile">
    <ProfileLeft/>

    <div className="profile-center">
      <div>
      <ProfileCard ProfilePage="true" />
      
      </div>
      <PostSide ProfilePage="true" />
    </div>
    <NavSide/>
   </div>
  )
}

export default Profile