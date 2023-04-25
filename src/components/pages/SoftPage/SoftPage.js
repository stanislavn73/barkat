import React, { memo, useState } from 'react'

import Anchor from '../../ui-kit/Anchor'
import AnchorMenu from '../../ui-kit/AnchorMenu'

import FirstScreen from './FirstScreen'
import Autodesk from './Autodesk'
import DassaultSystemes from './Dassault'
import Hexagon from './Hexagon'
import Bentley from './Bentley'
import SketchUp from './SketchUp'
import AllPlan from './AllPlan'
import './SoftPage.module.less'

const SoftPage = () => {
    const anchors = [
        {
            id: '3d-solutions',
            title: '3D-решения',
            comp: <FirstScreen />,
        },

        {
            id: 'AllPlan',
            title: 'AllPlan',
            comp: <AllPlan />,
        },
        {
            id: 'Autodesk',
            title: 'Autodesk',
            comp: <Autodesk />,
        },
        {
            id: 'Bentley',
            title: 'Bentley',
            comp: <Bentley />,
        },
        {
            id: 'Dassault-systemes',
            title: 'Dassault Systèmes',
            comp: <DassaultSystemes />,
        },
        {
            id: 'Hexagon-geospatial',
            title: 'Hexagon Geospatial',
            comp: <Hexagon />,
        },
        {
            id: 'SketchUp',
            title: 'Sketchup',
            comp: <SketchUp />,
        },
    ]

    const [activeAnchor, setActiveAnchor] = useState(anchors[0].id)

    const handleAnchorReact = id => {
        setActiveAnchor(id)
    }

    return (
        <>
            <AnchorMenu anchors={anchors} activeAnchor={activeAnchor} />
            {anchors.map(anchor => (
                <Anchor
                    key={anchor.id}
                    id={anchor.id}
                    onPositionChange={handleAnchorReact}
                >
                    {anchor.comp}
                </Anchor>
            ))}
        </>
    )
}

export default memo(SoftPage)
