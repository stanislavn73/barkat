import React from 'react';

import Anchor from '../../ui-kit/Anchor';
import AnchorMenu from '../../ui-kit/AnchorMenu';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdBlock';
import FourthBlock from './FourthBlock';
import FifthBlock from './FifthBlock';

const anchors = [
    {
        id: 'first',
        title: 'Наши проекты',
    },
    {
        id: 'second',
        title: 'О нас',
    },
    {
        id: 'third',
        title: 'Продукция',
    },
    {
        id: 'fourth',
        title: 'Проекты',
    },
    {
        id: 'fifth',
        title: 'Преимущества',
    },
];

class ProjectsPage extends React.PureComponent {
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
                <Anchor id='first' onPositionChange={this.handleAnchorReact}>
                    <FirstScreen />
                </Anchor>
                <Anchor id='second' onPositionChange={this.handleAnchorReact}>
                    <SecondScreen />
                </Anchor>
                <Anchor id='third' onPositionChange={this.handleAnchorReact}>
                    <ThirdScreen />
                </Anchor>
                <Anchor id='fourth' onPositionChange={this.handleAnchorReact}>
                    <FourthBlock />
                </Anchor>
                <Anchor id='fifth' onPositionChange={this.handleAnchorReact}>
                    <FifthBlock />
                </Anchor>
            </>
        );
    }
}

export default ProjectsPage;
