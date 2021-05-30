import React, { useState, useEffect } from 'react';
import Slider from '../ui-kit/Slider/Slider';
import FullPage from '../ui-kit/FullPage';
import { HeaderThumb } from '../ui-kit/Header';
import { mainSlides } from '../../utils/slider';
import './HomePage.less';

const titlesRules = [
    {
        titles: [0, 1, 2, 3],
        title: 'Barkat-Stein',
        subTitle: 'Facade Challengers',
        link: '/facades',
    },
    {
        titles: [4, 5, 6, 7],
        title: 'Barkat-3D-Ville',
        subTitle: 'Digital Twin Conceptors',
        link: '/soft',
    },
    {
        titles: [8, 9, 10],
        title: 'Barkat-Engineering',
        subTitle: "Internal engineering network's modernizers",
        link: '/engineer-nets',
    },
    {
        titles: [11, 12, 13, 14],
        title: 'Barkat-Agrospatial',
        subTitle: 'Making Farmers Digital',
        link: '/agro-solutions',
    },
];

function HomePage() {
    return (
        <>
            <HeaderThumb />
            <FullPage className='home-full-page'>
                <Slider
                    title='Barkat Stein'
                    slides={mainSlides}
                    titlesControl={titlesRules}
                />
            </FullPage>
        </>
    );
}

export default HomePage;
