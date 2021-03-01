import React, { useState, useEffect } from 'react'
import Title from '../../ui-kit/Title'

export default function MobileScrollBar({handleShowColumn, buttons }) {
  const [width, setWidth] = useState()
  const [styles, setStyles] = useState(buttons)
  const [navCss, setNavCss] = useState({position:'relative'})
  let primaryColor = '#c9643b'
  let breakPoint = 850

  useEffect(() => {
    setWidth(window.innerWidth)
    let newButtons = buttons
      .map(item => {
        item.buttonBackground = primaryColor
        item.buttonColor = 'white'
        return item
      })
      .filter(item => item.title !== 'Опции')
    setStyles(newButtons)
  }, [])

useEffect(() => {
  if(window.innerWidth<=850&&styles[0].title!=='Опции'){handleClick(1)}
}, [width])

  function handleClick(index) {
    handleChangeColor(index)
    handleShowColumn(index)
  }

  function handleChangeColor(index) {
    let oldActive = styles.map(item => {
      if (item.buttonBackground === 'white') {
        item.buttonBackground = primaryColor
        item.buttonColor = 'white'
      }
      return item
    })
    oldActive[index].buttonBackground = 'white'
    oldActive[index].buttonColor = 'black'
    setStyles(oldActive)
  }

  return (
    <div className= 'mobile_header'
     >
    <Title className='mobile' >Купить софт</Title>
      {width <= breakPoint &&
        < nav className='nav_scroll'  >
          <div className='button_container'>
            {styles.map((item, index) =>
              <div
                className='footer button_bar_mobile'
                key={index}
                onClick={() => {handleClick(index)}}
                style={{ background: item.buttonBackground, color: item.buttonColor }}
              >
                {item.title}
              </div>
            )
            }
          </div>
        </nav>}
    </div>
  )
}
