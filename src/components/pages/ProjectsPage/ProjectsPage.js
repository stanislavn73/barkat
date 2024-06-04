import { useState } from 'react'

import Anchor from '../../ui-kit/Anchor'
import AnchorMenu from '../../ui-kit/AnchorMenu'

import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdBlock'
import FourthBlock from './FourthBlock'
import FifthBlock from './FifthBlock'
import { useTranslation } from '../../layouts/Layout'

const anchors = [
    {
        id: 'projects',
        title: 'Наши проекты',
    },
    {
        id: 'about',
        title: 'О нас',
    },
    {
        id: 'products',
        title: 'Продукция',
    },
    {
        id: 'projects',
        title: 'Проекты',
    },
    {
        id: 'advantages',
        title: 'Преимущества',
    },
]

const ProjectsPage = () => {
    const [activeAnchor, setActiveAnchor] = useState('first')
    const { t } = useTranslation('facades')

    const handleAnchorReact = id => {
        setActiveAnchor(id)
    }

    return (
        <>
            <AnchorMenu anchors={anchors} activeAnchor={activeAnchor} />
            <Anchor id='projects' onPositionChange={handleAnchorReact}>
                <FirstScreen />
            </Anchor>
            <Anchor id='about' onPositionChange={handleAnchorReact}>
                <SecondScreen />
            </Anchor>
            <Anchor id='products' onPositionChange={handleAnchorReact}>
                <ThirdScreen />
            </Anchor>
            <Anchor id='projects' onPositionChange={handleAnchorReact}>
                <FourthBlock />
            </Anchor>
            <Anchor id='advantages' onPositionChange={handleAnchorReact}>
                <FifthBlock />
            </Anchor>
        </>
    )
}

export default ProjectsPage
