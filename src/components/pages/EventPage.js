import React from 'react';
import Slider from 'react-slick';
import FadeInWrapper from '../ui-kit/FadeInWrapper';
import FullPage from '../ui-kit/FullPage';
import { HeaderThumb } from '../ui-kit/Header';
import PageImageTitle from '../ui-kit/PageImageTitle/PageImageTitle';
import * as backgroundImage from '../../assets/images/slider/projects/1.4.jpg';
import Img from '../ui-kit/Img';
import './EventPage.module.less';

class Eventpage extends React.PureComponent {
    render() {
        return (
            <>
                <FullPage>
                    <Img src={backgroundImage} className='background-image' />
                </FullPage>
            </>
        );
    }
}

export default Eventpage;
