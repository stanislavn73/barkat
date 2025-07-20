import { memo, useState } from 'react'

import Anchor from '../../ui-kit/Anchor'
import AnchorMenu from '../../ui-kit/AnchorMenu'

import FirstScreen from './FirstScreen'
import Autodesk from './Autodesk'
import Hexagon from './Hexagon'
import Bentley from './Bentley'
import SketchUp from './SketchUp'
import TeamViewer from './TeamViewer'
import { GoogleCloud } from './GoogleCloud/GoogleCloud'
import { GoogleWorkspace } from './GoogleWorkspace/GoogleWorkspace'
import { useTranslation } from '../../layouts/Layout'

const SoftPage = () => {
    const { t } = useTranslation('soft')
    const solutionsAnchorTitle = t.solutions.title
    const anchors = [
        {
            id: '3d-solutions',
            title: solutionsAnchorTitle,
            comp: <FirstScreen />,
        },
        {
            id: 'googleCloud',
            title: 'Google Cloud',
            comp: <GoogleCloud />,
        },
        {
            id: 'googleWorkspace',
            title: 'Google Workspace',
            comp: <GoogleWorkspace />,
        },
        {
            id: 'Hexagon-geospatial',
            title: 'Hexagon Geospatial',
            comp: <Hexagon />,
        },
        {
            id: 'TeamViewerFrontline',
            title: 'TeamViewer Frontline',
            comp: <TeamViewer />,
        },
        {
            id: 'Bentley',
            title: 'Bentley',
            comp: <Bentley />,
        },
        {
            id: 'Autodesk',
            title: 'Autodesk',
            comp: <Autodesk />,
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
