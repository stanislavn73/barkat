import React from 'react';

import Anchor from '../../ui-kit/Anchor';
import AnchorMenu from '../../ui-kit/AnchorMenu';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdBlock';
import FourthBlock from './FourthBlock';
import FivethBlock from './FivethBlock';
import MarbleBlock from './MarbleBlock';
import ClinkerstoneBlock from './Clinkerstone';
import TerracotaBlock from './Terracota';
import PorcelainTileBlock from './PorcelainTile';
import ArtificalStoneBlock from './ArtificalStone';
import FacadesDescriptionNavigation from './FacadesDescription/FacadesNavigation';
import './FacadesPage.less';

const anchors = [
    {
        id: 'main',
        title: 'О фасадах',
    },
    {
        id: 'about',
        title: 'О вентфасадах',
    },
    {
        id: 'advantages',
        title: 'Преимущества',
    },
    {
        id: 'designing',
        title: 'Разработка',
    },
    {
        id: 'about-system',
        title: 'О системе',
    },
    {
        id: 'marble',
        title: 'Фасад МРАМОР / ДОЛОМИТ / ТРАВЕРТИН',
    },
    {
        id: 'clinkerstone',
        title: 'Фасад КЛИНКЕРСТОУН',
    },
    {
        id: 'terracota',
        title: 'Фасад ТЕРРАКОТОВЫЕ ПАНЕЛИ',
    },
    {
        id: 'porcelain-tile',
        title: 'Фасад КЕРАМОГРАНИТ',
    },
    {
        id: 'artifical-stone',
        title: 'Фасад ИСКУССТВЕННЫЙ КАМЕНЬ',
    },
];

class FacadesPage extends React.PureComponent {
    state = {
        activeAnchor: 'first',
    };

    handleAnchorReact = (id) => {
        this.setState({ activeAnchor: id });
    };

    render() {
        const { activeAnchor } = this.state;

        return (
            <>
                <AnchorMenu anchors={anchors} activeAnchor={activeAnchor} />
                <Anchor id='main' onPositionChange={this.handleAnchorReact}>
                    <FirstScreen />
                </Anchor>
                <Anchor id='about' onPositionChange={this.handleAnchorReact}>
                    <SecondScreen />
                </Anchor>
                <Anchor
                    id='advantages'
                    onPositionChange={this.handleAnchorReact}
                >
                    <ThirdScreen />
                </Anchor>
                <Anchor
                    id='designing'
                    onPositionChange={this.handleAnchorReact}
                >
                    <FourthBlock />
                </Anchor>
                <Anchor
                    id='about-system'
                    onPositionChange={this.handleAnchorReact}
                >
                    <FivethBlock />
                </Anchor>
                <Anchor id='marble' onPositionChange={this.handleAnchorReact}>
                    <MarbleBlock />
                </Anchor>
                <Anchor
                    id='clinkerstone'
                    onPositionChange={this.handleAnchorReact}
                >
                    <ClinkerstoneBlock />
                </Anchor>
                <Anchor
                    id='terracota'
                    onPositionChange={this.handleAnchorReact}
                >
                    <TerracotaBlock />
                </Anchor>
                <Anchor
                    id='porcelain-tile'
                    onPositionChange={this.handleAnchorReact}
                >
                    <PorcelainTileBlock />
                </Anchor>
                <Anchor
                    id='artifical-stone'
                    onPositionChange={this.handleAnchorReact}
                >
                    <ArtificalStoneBlock />
                </Anchor>
            </>
        );
    }
}

export default FacadesPage;
