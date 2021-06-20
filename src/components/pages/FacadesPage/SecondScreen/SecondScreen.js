import React from 'react';

import FullPage from '../../../ui-kit/FullPage/FullPage';
import Padded from '../../../ui-kit/Padded/Padded';
import IconsBlock from '../../../ui-kit/IconsBlock';
import Img from '../../../ui-kit/Img';

import './SecondScreen.module.less';

import facadesIcons from '../../../../utils/facades_preferences';
import * as backgroundImage from '../../../../assets/images/pages/facades/2back.jpg';

import IconsFader from './IconsFader';

class ProjectsSecondScreen extends React.PureComponent {
    render() {
        return (
            <FullPage min ref={this.block} className='facades-second-wrapper'>
                <Img src={backgroundImage} className='back' />
                <IconsFader>
                    {facadesIcons.slice(0, 3).map((el) => (
                        <div className='icon-wrapper' key={el.icon.src}>
                            <Img src={el.icon} className='icon' />
                            <div>{el.text}</div>
                        </div>
                    ))}
                </IconsFader>
                <IconsFader delay={1000}>
                    {facadesIcons.slice(3, 6).map((el) => (
                        <div className='icon-wrapper' key={el.icon.src}>
                            <Img src={el.icon} className='icon' />
                            <div>{el.text}</div>
                        </div>
                    ))}
                </IconsFader>
                <IconsFader delay={2000}>
                    {facadesIcons.slice(6, 9).map((el) => (
                        <div className='icon-wrapper' key={el.icon.src}>
                            <Img src={el.icon} className='icon' />
                            <div>{el.text}</div>
                        </div>
                    ))}
                </IconsFader>
                <IconsFader delay={3000}>
                    {facadesIcons.slice(9, 12).map((el) => (
                        <div className='icon-wrapper' key={el.icon.src}>
                            <Img src={el.icon} className='icon' />
                            <div className='text'>{el.text}</div>
                        </div>
                    ))}
                </IconsFader>
            </FullPage>
        );
    }
}

export default ProjectsSecondScreen;
