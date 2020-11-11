import React, { useState } from 'react';
import FullPage from '../../../ui-kit/FullPage';
import Padded from '../../../ui-kit/Padded';
import Img from '../../../ui-kit/Img';
import * as firstIcon from '../../../../assets/images/icons/objectA.png';
import * as secondIcon from '../../../../assets/images/icons/objectB.png';
import * as thirdIcon from '../../../../assets/images/icons/objectC.png';
import * as tower from '../../../../assets/images/pages/About_us_fiveth.png';
import './FivethBlock.less';


function ProjectsFivethBlock() {
    const [activeSlide, setActiveSlide] = useState('');

    function handleSetActiveSlide(id) {
        return () => {
            setActiveSlide(activeSlide === id ? '' : id);
        };
    }

    return (
        <div className='fiveth-wrapper'>
            <FullPage>
                <div className='title'>
                    Наши преимущества
                </div>
                <Padded>
                    <div className='preferences'>
                        <div className='preference-item'>
                            <div className='preference-text'>
                                продажи
                            </div>
                            <div className='preference-circle' />
                            <Img src={firstIcon} />
                        </div>
                        <div className='preference-item'>
                            <div className='preference-text'>
                                аудит
                            </div>
                            <div className='preference-circle' />
                            <Img src={secondIcon} />
                        </div>
                        <div className='preference-item'>
                            <div className='preference-text'>
                                внедрение
                            </div>
                            <div className='preference-circle' />
                            <Img src={thirdIcon} />
                        </div>
                    </div>
                    <div className='preferences-image'>
                        <div className='preference-text-wrapper'>
                            <div className='top-part' />
                            <div className='bottom-part' />
                            <div className='text'>
                                Если бизнес партнера стал более ефективный - это наивысшая оценка для нас
                            </div>
                            <div className='subtext'>
                                Александр Баркат
                            </div>
                        </div>
                        <Img src={tower} />
                    </div>
                </Padded>
            </FullPage>
        </div>
    );
}

export default ProjectsFivethBlock;
