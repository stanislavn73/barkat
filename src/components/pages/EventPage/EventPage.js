import React from 'react';
import './EventPage.less';
import SocialMedia from '../../ui-kit/SocialMedia/SocialMedia';
import FirstScreen from './FirstScreen';
import Padded from '../../ui-kit/Padded';
import * as logoVille from '../../../assets/images/logo-ville.png';
import * as logo from '../../../assets/images/logo.png';
import Img from '../../ui-kit/Img';

function Eventpage() {
    return (
        <>
            <FirstScreen />
            <Padded className='soft-block-padded'>
                <div className='social-media-block'>
                    <Img className='logo' src={logo} />
                </div>
                <div className='social-media-block'>
                    <div className='soft-block-title'>Вентилируемые фасады</div>
                    <SocialMedia page='logo' />
                </div>
                <div className='social-media-block'>
                    <Img className='logo' src={logoVille} />
                </div>
                <div className='social-media-block'>
                    <div className='soft-block-title'>Autodesk</div>
                    <SocialMedia page='Autodesk' />
                </div>
                <div className='social-media-block'>
                    <div className='soft-block-title'>Dassault Systèmes</div>
                    <SocialMedia page='Dassault' />
                </div>
                <div className='social-media-block'>
                    <div className='soft-block-title'>Hexagon</div>
                    <SocialMedia page='Hexagon' />
                </div>
                <div className='social-media-block'>
                    <div className='soft-block-title'>Bentley</div>
                    <SocialMedia page='Bentley' />
                </div>
                <div className='social-media-block'>
                    <div className='soft-block-title'>SketchUp</div>
                    <SocialMedia page='SketchUp' />
                </div>
                <div className='social-media-block'>
                    <div className='soft-block-title'>AllPlan</div>
                    <SocialMedia page='AllPlan' />
                </div>
            </Padded>
        </>
    );
}

export default Eventpage;
