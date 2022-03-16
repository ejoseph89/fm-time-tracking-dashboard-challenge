import React from 'react'



const UserStatSort = ({optionOne, optionTwo, optionThree}) => {

  const clickHandler = (e) => {
    if (e.target.innerText === "Daily") {
      console.log('Daily')
    } else if (e.target.innerText === "Weekly") {
      console.log('Weekly')
    } else  if (e.target.innerText === "Monthly") {
      console.log('Monthly')
    } 
  }

  return (
    <ul className='user-profile--sort' >
      <li><button onClick={(e) => {clickHandler(e)}} >{optionOne}</button></li>
      <li><button onClick={(e) => {clickHandler(e)}} >{optionTwo}</button></li>
      <li><button onClick={(e) => {clickHandler(e)}} >{optionThree}</button></li>
    </ul>
)
}

export default UserStatSort