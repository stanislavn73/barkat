import React from 'react';
import FadeInWrapper from '../FadeInWrapper';
import { ModalConsumer } from '../../layouts/Layout';
import Padded from '../Padded';
import Img from '../Img';

import './PageImageTitle.less';

function PageImageTitle({ src, title, subTitle, onButtonClick }) {
    return (
        <div className='image-title-wrapper'>
            <Img src={src} className='background-image' />
            <FadeInWrapper delay='0.4'>
                <Padded>
                    <div className='title-wrapper'>
                        <div className='title-block'>
                            <div className='text-wrapper'>
                                <div className='title'>
                                    {title}
                                </div>
                                <div className='subtitle-text'>
                                    {subTitle}
                                </div>
                            </div>
                        </div>
                        <ModalConsumer>
                            {({handleOpenForm}) => <div className='button' onClick={handleOpenForm}>Написать нам</div>}
                        </ModalConsumer>
                    </div>
                </Padded>
            </FadeInWrapper>
        </div>
    );
}

export default React.memo(PageImageTitle);
