import React from 'react';

import Anchor from '../../ui-kit/Anchor';
import AnchorMenu from '../../ui-kit/AnchorMenu';

import FirstScreen from './FirstScreen';
import Autodesk from './Autodesk';
import DassaultSystemes from './Dassault'
import Hexagon from './Hexagon'
import Bentley from './Bentley'
import SketchUp from './SketchUp';
import AllPlan from './AllPlan';
import './SoftPage.less';

const anchors = [
    {
        id: '3d-solutions',
        title: '3D-решения'
    },
    {
        id: 'Autodesk',
        title: 'Autodesk'
    },
    {
        id: 'Dassault-systemes',
        title: 'Dassault Systèmes'
    },
    {
        id: 'Hexagon-geospatial',
        title: 'Hexagon Geospatial'
    },
    {
        id: 'Bentley',
        title: 'Bentley'
    },
    {
        id: 'SketchUp',
        title: 'Sketchup'
    },
    {
        id: 'AllPlan',
        title: 'AllPlan'
    }
];

class FacadesPage extends React.PureComponent {
    state = {
        activeAnchor: 'first'
    }

    handleAnchorReact = (id) => {
        this.setState({ activeAnchor: id });
    }

    render() {
        const { activeAnchor } = this.state;

        return (
            <>
                <AnchorMenu anchors={anchors} activeAnchor={activeAnchor} />
                <Anchor id='first' onPositionChange={this.handleAnchorReact}>
                    <FirstScreen />
                </Anchor>
                <Anchor id='Autodesk' onPositionChange={this.handleAnchorReact}>
                    <Autodesk />
                </Anchor>
                <Anchor id='Dassault-systemes' onPositionChange={this.handleAnchorReact}>
                    <DassaultSystemes />
                </Anchor>
                <Anchor id='Hexagon-geospatial' onPositionChange={this.handleAnchorReact}>
                    <Hexagon />
                </Anchor>
                <Anchor id='Bentley' onPositionChange={this.handleAnchorReact}>
                    <Bentley />
                </Anchor>
                <Anchor id='SketchUp' onPositionChange={this.handleAnchorReact}>
                    <SketchUp />
                </Anchor>
                <Anchor id='AllPlan' onPositionChange={this.handleAnchorReact}>
                    <AllPlan />
                </Anchor>
            </>
        );
    }
}

export default FacadesPage;
