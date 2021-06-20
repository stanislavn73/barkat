import React from 'react';
import FullPage from '../../../ui-kit/FullPage/FullPage';
import PageImageTitle from '../../../ui-kit/PageImageTitle/PageImageTitle';
import { HeaderThumb } from '../../../ui-kit/Header';
import * as backgroundImage from '../../../../assets/images/pages/soft/title-back.jpg';
import './FirstScreen.module.less';

const screenTitle = '3D решения';
const subTitle =
    '3D-Soft из портфеля Barkat-3D-Ville поможет Вам в создании «Цифрового Двойника» (Digital Twin) моделируемого объекта, что позволит повысить эффективность и оптимизировать процессы проектирования, строительства и производства. Цифровой двойник выпускаемых изделий способствует внедрению современной технологии PLM (Product Lifecycle Management, управление жизненным циклом изделия) и BLM (Building Lifecycle Management, управление жизненным циклом объекта строительства).';

function ProjectsFirstScreen() {
    return (
        <FullPage className='block-wrapper'>
            <HeaderThumb />
            <PageImageTitle
                src={backgroundImage}
                title={screenTitle}
                subTitle={subTitle}
            />
        </FullPage>
    );
}

export default ProjectsFirstScreen;
