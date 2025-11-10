import { useState } from 'react'

import Anchor from '../../ui-kit/Anchor'
import AnchorMenu from '../../ui-kit/AnchorMenu'

import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdBlock'
import FourthBlock from './FourthBlock'
import FifthBlock from './FifthBlock'
import { useTranslation } from '../../layouts/Layout'

const ProjectsPage = () => {
    const [activeAnchor, setActiveAnchor] = useState('first')
    const { t } = useTranslation('projects')

    const anchors = [
        {
            id: 'projects',
            title: t.anchors.projects,
        },
        {
            id: 'about',
            title: t.anchors.about,
        },
        {
            id: 'products',
            title: t.anchors.products,
        },
        {
            id: 'advantages',
            title: t.anchors.advantages,
        },
    ]

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
            <Anchor id='gallery' onPositionChange={handleAnchorReact}>
                <FourthBlock />
            </Anchor>
            <Anchor id='advantages' onPositionChange={handleAnchorReact}>
                <FifthBlock />
            </Anchor>
        </>
    )
}

export default ProjectsPage
