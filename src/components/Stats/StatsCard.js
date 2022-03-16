import React from 'react'

import SettingsIcon from '../../assets/images/icon-ellipsis.svg'
import WorkIcon from '../../assets/images/icon-work.svg'
import PlayIcon from '../../assets/images/icon-play.svg'
import StudyIcon from '../../assets/images/icon-study.svg'
import ExerciseIcon from '../../assets/images/icon-exercise.svg'
import SocialIcon from '../../assets/images/icon-social.svg'
import SelfCareIcon from '../../assets/images/icon-self-care.svg'


const StatsCard = ({ data }) => {

  const icon = data.title === "Work" ? WorkIcon : 
    data.title === "Play" ? PlayIcon :
    data.title === "Study" ? StudyIcon :
    data.title === "Exercise" ? ExerciseIcon :
    data.title === "Social" ? SocialIcon :
    data.title === "Self Care" ? SelfCareIcon : null

  const statBannerColor = data.title === "Work" ? 'work' : 
    data.title === "Play" ? 'play' :
    data.title === "Study" ? 'study' :
    data.title === "Exercise" ? 'exercise' :
    data.title === "Social" ? 'social' :
    data.title === "Self Care" ? 'selfcare' : null


  return (

    <article className={`stats-card--container ${statBannerColor} `} >
      <div className="stats-card--img">
        <img src={icon} alt="" />
      </div>
      <div className="stats-card">
        <div className="stats-card--title">
          <h3>{data.title}</h3>
          <button><img src={SettingsIcon} alt="" /></button>
        </div>
        <div className="current-stats">
          <h2>{data.timeframes.weekly.current}hrs</h2>
          <p className="previous-stats">Last Week - {data.timeframes.weekly.previous}hrs</p>
        </div>
      </div>
    </article>
  )
}

export default StatsCard