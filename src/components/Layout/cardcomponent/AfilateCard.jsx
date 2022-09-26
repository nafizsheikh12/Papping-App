import React,{useState,useEffect} from 'react'
import "./Afilate.css"

//icon file
import img from './icon/Vector (4).png';
import userImg from './icon/user.png'
import skype from './icon/skype.png';
import userIcon from './icon/user-icon (1).png';
import msgIcon from './icon/Vector (7).png';

const AfilateCard = ({User}) => {
  
  return (
    <>
       <div className='MainAffilateCard'>
            <div className='MainAffilateCardHeader'>
                <img src={img}/>
                <h3>Your Affiliate Manager</h3>
            </div>
            <div className='MainAffilateCardBody'>
                <div className='MainAffilateCardTopContent'>
                    <div className='MainAffilateCardtomimg'>
                       <img src={userImg}/>
                    </div>
                    <h4><img src={userIcon}/>{User.first_name} {User.last_name}</h4>
                    <span>Your Affilate Manager</span>
                </div>
                <div className='MainAffilateCardBottomContent'>
                    <h4>Get in touch</h4>
                    <span><img src={skype}/>{User.skype}</span>
                    <span><img src={msgIcon}/>{User.email}</span>
                </div>
            </div>
       </div>
    </>
  )
}

export default AfilateCard