import { useState } from 'react'

import Anchor from '../../ui-kit/Anchor'
import AnchorMenu from '../../ui-kit/AnchorMenu'

import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdBlock'
import FourthBlock from './FourthBlock'
import FifthBlock from './FifthBlock'

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
]

const ProjectsPage = () => {
    const [activeAnchor, setActiveAnchor] = useState('first')

    const handleAnchorReact = id => {
        setActiveAnchor(id)
    }

    return (
        <>
            <AnchorMenu anchors={anchors} activeAnchor={activeAnchor} />
            <Anchor id='first' onPositionChange={handleAnchorReact}>
                <FirstScreen />
            </Anchor>
            <Anchor id='second' onPositionChange={handleAnchorReact}>
                <SecondScreen />
            </Anchor>
            <Anchor id='third' onPositionChange={handleAnchorReact}>
                <ThirdScreen />
            </Anchor>
            <Anchor id='fourth' onPositionChange={handleAnchorReact}>
                <FourthBlock />
            </Anchor>
            <Anchor id='fifth' onPositionChange={handleAnchorReact}>
                <FifthBlock />
            </Anchor>
        </>
    )
}

export default ProjectsPage
