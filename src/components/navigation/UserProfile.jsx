import React from 'react';
import Bell from '../../assets/navigation/bell.png'
import ProfileIcon from '../../assets/navigation/profile.png'

const UserProfile = () => {
  return (
    <>
      <img loading="lazy" src={Bell} alt="Notifications" className="object-contain shrink-0 my-auto w-8 aspect-square" />
      <img loading="lazy" src={ProfileIcon} alt="User profile" className="object-contain shrink-0 w-12 rounded-md aspect-square" />
    </>
  );
}

export default UserProfile;