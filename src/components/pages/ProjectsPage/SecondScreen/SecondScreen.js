import React from 'react';
import FullPage from '../../../ui-kit/FullPage/FullPage';
import Padded from '../../../ui-kit/Padded/Padded';
import IconsBlock from '../../../ui-kit/IconsBlock';
import Img from '../../../ui-kit/Img';
import './SecondScreen.less';

import achievements from '../../../../utils/achievements';
import * as backgroundImage from '../../../../assets/images/pages/About_us_second.jpg';

function ProjectsSecondScreen() {
    return (
        <FullPage>
            <div className='icons-wrapper'>
                <Padded>
                    <IconsBlock items={achievements} />
                </Padded>
            </div>
            <div className='screen-wrapper'>
                <Img className='screen' src={backgroundImage} />
            </div>
        </FullPage>
    );
}

export default ProjectsSecondScreen;
