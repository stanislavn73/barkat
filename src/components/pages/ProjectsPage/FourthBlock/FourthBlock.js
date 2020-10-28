import React, { useState } from 'react';
import cx from 'classnames';
import FullPage from '../../../ui-kit/FullPage';
import Img from '../../../ui-kit/Img';
import ImageSlides from '../../../ui-kit/ImageSlides';
import projects from '../../../../utils/projects';

import './FourthBlock.less';


function ProjectsFourthBlock() {
    return (
        <FullPage>
            <ImageSlides data={projects} />
        </FullPage>
    );
}

export default React.memo(ProjectsFourthBlock);
