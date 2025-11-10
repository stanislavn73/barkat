import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import Router from 'next/router'
import cx from 'classnames'

import Img from '../Img'

import * as nextArrowImg from '../../../../public/images/slider/nextArrow.png'
import * as prevArrowImg from '../../../../public/images/slider/prevArrow.png'

import styles from './Slider.module.scss'

const SliderComponent = ({ slides, titlesControl }) => {
    const [state, setState] = useState({
        currentSlide: 0,
    })
    const sliderRef = useRef()

    const handleSlide = type => () => {
        if (type === 'right') {
            sliderRef.current.slickNext()
        } else {
            sliderRef.current.slickPrev()
        }
    }

    const handleTitleClick = link => () => {
        Router.push(link)
    }

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        beforeChange: (...a) => setState({ currentSlide: a[1] }),
    }

    const { title, subTitle, link } = titlesControl.find(rule =>
        rule.titles.includes(state.currentSlide)
    )

    return (
        <div className={styles['slider-wrapper']}>
            {title && (
                <div className={styles['slider-title-wrapper']}>
                    <div className={styles['slider-title-content-wrapper']}>
                        <div
                            className={styles['slider-title']}
                            onClick={handleTitleClick(link)}
                        >
                            {title}
                        </div>
                        <div className={styles['slider-subtitle']}>
                            {subTitle}
                        </div>
                    </div>
                </div>
            )}
            <div
                className={cx(styles.arrow, styles.left)}
                onClick={handleSlide('left')}
            >
                <Img src={prevArrowImg} alt="Previous" width={60} height={60} />
            </div>
            <Slider {...settings} ref={sliderRef}>
                {slides.map((slide, index) => (
                    <div className={styles['slider-item']} key={`slide-${index}`}>
                        <Img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            priority={index === 0}
                            sizes="100vw"
                        />
                    </div>
                ))}
            </Slider>
            <div
                className={styles['arrow right']}
                onClick={handleSlide('right')}
            >
                <Img src={nextArrowImg} alt="Next" width={60} height={60} />
            </div>
        </div>
    )
}

export default SliderComponent
