import React from 'react';
import Slider from 'react-slick';
import Router from 'next/router';

import Img from '../Img';

import * as nextArrowImg from '../../../assets/images/slider/nextArrow.png';
import * as prevArrowImg from '../../../assets/images/slider/prevArrow.png';

import './Slider.module.less';

class SliderComponent extends React.PureComponent {
    state = {
        currentSlide: 0,
    };

    handleSlide = (type) => () => {
        if (type === 'right') {
            this.slick.slickNext();
        } else {
            this.slick.slickPrev();
        }
    };

    titlesControl = () => {
        const { titlesControl } = this.props;

        return titlesControl.find((rule) =>
            rule.titles.includes(this.state.currentSlide)
        );
    };

    handleTitleClick = (link) => () => {
        Router.push(link);
    };

    settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 4000,
        beforeChange: (...a) => this.setState({ currentSlide: a[1] }),
    };

    render() {
        const { slides } = this.props;
        const { title, subTitle, link } = this.titlesControl();

        return (
            <div className='slider-wrapper'>
                {title && (
                    <div className='slider-title-wrapper'>
                        <div className='slider-title-content-wrapper'>
                            <div
                                className='slider-title'
                                onClick={this.handleTitleClick(link)}
                            >
                                {title}
                            </div>
                            <div className='slider-subtitle'>{subTitle}</div>
                        </div>
                    </div>
                )}
                <div className='arrow left' onClick={this.handleSlide('left')}>
                    <Img src={prevArrowImg} />
                </div>
                <Slider {...this.settings} ref={(node) => (this.slick = node)}>
                    {slides.map((slide) => (
                        <div className='slider-item' key={slide}>
                            <Img src={slide} />
                        </div>
                    ))}
                </Slider>
                <div
                    className='arrow right'
                    onClick={this.handleSlide('right')}
                >
                    <Img src={nextArrowImg} />
                </div>
            </div>
        );
    }
}

export default SliderComponent;
