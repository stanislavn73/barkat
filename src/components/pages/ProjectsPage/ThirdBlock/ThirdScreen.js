import React from 'react';
import FullPage from '../../../ui-kit/FullPage';
import Padded from '../../../ui-kit/Padded';
import PlainText from '../../../ui-kit/PlainText';
import Bold from '../../../ui-kit/Bold';
import Img from '../../../ui-kit/Img';
import * as imageBlock from '../../../../assets/images/pages/About_us_third.jpg';
import './ThirdScreen.less';

function ProjectsThirdScreen() {
    return (
        <div className='third-screen-wrapper'>
            <FullPage className='third-fullpage-projects'>
                <Padded>
                    <div className='text-block'>
                        <div className='text'>
                            <PlainText>
                                <Bold>Группа компаний BARKAT</Bold> - Value
                                Increasing Partner в сфере поставок фасадных и
                                инженерных материалов на рынке гражданского и
                                коммерческого строительства, а также IT-решений
                                в таких сферах как: агро-, авиа-, металлургия,
                                нефтегаз, горная добыча, машиностроение и многих
                                других. Компания разделена на несколько основных
                                подразделений:
                            </PlainText>
                            <PlainText>
                                - <Bold>Barkat-Stein</Bold> – эксперт в мире
                                облицовочных материалов из мрамора, доломита,
                                клинкера, терракотовых панелей и керамогранита
                                по оформлению вентилированных фасадов и
                                внутреннего интерьера. Архитектурные решения
                                Barkat-Stein повысят инвестиционную
                                привлекательность любого строительного объекта.
                            </PlainText>
                            <PlainText>
                                - <Bold>Barkat-3D-Ville</Bold> – надежный
                                партнер по поставке и внедрению программного
                                обеспечения для управления геоданными (GIS),
                                3D-проектирования (CAD) и управления жизненным
                                циклом продукции (PLM), а также инструментов
                                технологии BIM.
                            </PlainText>
                            <PlainText>
                                - <Bold>Barkat-Engineering</Bold> – эксперт по
                                автоматизации внутренних инженерных сетей зданий
                                и сооружений.
                            </PlainText>
                            <PlainText>
                                - <Bold>Barkat-Agrospatial</Bold> – по принципу
                                «MAKING FARMERS DIGITAL» наши эксперты внедряют
                                цифровые IT-решения в агросферу, такие как
                                передовые системы агромониторинга.
                            </PlainText>
                        </div>
                    </div>
                </Padded>
                <div className='image-block'>
                    <Img className='image-block-image' src={imageBlock} />
                    <div className='image-block-title'>Barkat stein</div>
                </div>
                <div className='back-title'>Barkat-stein</div>
            </FullPage>
        </div>
    );
}

export default ProjectsThirdScreen;
