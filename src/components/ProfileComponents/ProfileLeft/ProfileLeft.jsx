import React from 'react'
import "../../HomeComponents/ProfileSide/ProfileSide.css"
import LogoSeach from '../../HomeComponents/ProfileSide/LogoSeach/LogoSeach'
import FolowersCard from '../../HomeComponents/ProfileSide/FolowersCard/FolowersCard'
import InfoCard from '../InfoCard/InfoCard'
const ProfileLeft = () => {
  return (
 <div className="ProfileSide">
<LogoSeach/>
<InfoCard/>
<FolowersCard/>
 </div>
  )
}

export default ProfileLeft