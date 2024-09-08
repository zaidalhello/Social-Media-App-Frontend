import React from 'react'
import './Home.css'
import ProfileSide from '../../components/HomeComponents/ProfileSide/ProfileSide'
import PostSide from '../../components/HomeComponents/PostSide/PostSide'
import NavSide from '../../components/HomeComponents/NavSide/NavSide'
const Home = () => {
  return (
<div className="Home">
<ProfileSide/>
    <PostSide/>
    <NavSide/>
</div>
  )
}

export default Home