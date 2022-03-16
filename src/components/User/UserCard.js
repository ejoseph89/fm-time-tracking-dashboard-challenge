import React, { useState } from 'react'
import UserStatSort from './UserStatSort'

import UserImage from '../../assets/images/image-jeremy.png'


const UserCard = ({ userName }) => {
  

  return (
    <section className="user-card">
      <div className="user-profile">
        <div className="user-profile--img">
          <img src={UserImage} alt="" />
        </div>
        <div>
          <p>Report for</p>
          <h2 className='user-profile--title' >{userName}</h2>
          <p><a href="#">View profile</a></p>
        </div>
      </div>
      <div>
        <UserStatSort
          optionOne="Daily"
          optionTwo="Weekly"
          optionThree="Monthly"
        />
      </div>
    </section>
  )
}

export default UserCard