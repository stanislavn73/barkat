import React from 'react';
import FullPage from '../../../ui-kit/FullPage/FullPage';
import PageImageTitle from '../../../ui-kit/PageImageTitle/PageImageTitle';
import { HeaderThumb } from '../../../ui-kit/Header';
import * as backgroundImage from '../../../../assets/images/pages/About_us_first.jpg';
import './FirstScreen.module.less';

const screenTitle = 'Наши проекты';

function ProjectsFirstScreen() {
    return (
        <FullPage>
            <HeaderThumb />
            <PageImageTitle
                src={backgroundImage}
                title={screenTitle}
                subTitle={
                    'Решения из портфеля Barkat-Stein установлены и внедрены в ряде компаний и объектов,\
                что у всех «на слуху» в различных сферах промышленности: от вент.фасадов и\
                инженерного оборудования на знаковых объектах гражданского и коммерческого\
                строительства до таких софтовыех решений как: - «Digital Rock / Unified Reservoir» (в\
                нафтегазовой отрасли), - «BIM Level 3» (в строительстве), - «3DExperience» (в машино- и\
                авиастроение), - «Virtual Factory» (в производственных отраслях), - «3D-Печать» (в\
                цифровом аддитивном производстве), «GEOMEDIA» (системы агромониторинга)'
                }
            />
            <div className='black-bottom-line'>
                <div className='padded'>
                    <div className='thumb-content-wrapper'>
                        <div>asd</div>
                        <div className='title-flag'>
                            <div>О нас</div>
                        </div>
                    </div>
                </div>
            </div>
        </FullPage>
    );
}

export default ProjectsFirstScreen;
