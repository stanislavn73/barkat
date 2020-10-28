import React from 'react';
import FullPage from '../../../ui-kit/FullPage/FullPage';
import PageImageTitle from '../../../ui-kit/PageImageTitle/PageImageTitle';
import { HeaderThumb } from '../../../ui-kit/Header';
import * as backgroundImage from '../../../../assets/images/pages/facades/1.jpg';
import './FirstScreen.less';

const screenTitle = 'Фасады';
const subTitle = 'Надежный партнер в мире навесных вентилированных фасадов (НВФ, вентфасадов)  из доломита, мрамора, керамогранита, клинкера, терракотовых панелей и искусственного камня,  что широко используются на рынке гражданского и коммерческого строительства, и повышающих энергоэффективность и архитектурную привлекательность зданий и сооружений. Применение НВФ позволяет реализовывать сложные и нестандартные архитектурные решения.';

function ProjectsFirstScreen() {
    return (
        <FullPage className='block-wrapper'>
            <HeaderThumb />
            <PageImageTitle src={backgroundImage} title={screenTitle} subTitle={subTitle} />
            <div className='bottom-line-facades'>
                <div className='padded'>
                    <div className='thumb-content-wrapper'>
                        <div className='title-flag' >
                            <div>О вентфасадах</div>
                        </div>
                    </div>
                </div>
            </div>
        </FullPage>
    );
}

export default ProjectsFirstScreen;
