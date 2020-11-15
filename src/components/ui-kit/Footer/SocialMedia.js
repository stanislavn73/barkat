import React from 'react'
import './Social.less';

export default function SocialMedia() {
  return (
    <div className='social-wrapper1'>

      <button className='facebook1'
        onClick={() => window.open('https://www.facebook.com/Barkat-Stein-100872801796847')}
      >

      </button>
      <button className='insta1'
        onClick={() => window.open('https://www.instagram.com/barkat_stein/?hl=ru')}
      >

      </button>
      <button className='linkedin1'
        onClick={() => window.open('https://www.linkedin.com/company/65744024/admin/')}
      >

      </button>
    </div>
  )
}