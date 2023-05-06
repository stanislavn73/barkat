import { memo, useState } from 'react'

import Anchor from '../../ui-kit/Anchor'
import AnchorMenu from '../../ui-kit/AnchorMenu'

import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdBlock'
import FourthBlock from './FourthBlock'
import FivethBlock from './FivethBlock'
import MarbleBlock from './MarbleBlock'
import ClinkerstoneBlock from './Clinkerstone'
import TerracotaBlock from './Terracota'
import PorcelainTileBlock from './PorcelainTile'
import ArtificalStoneBlock from './ArtificalStone'

const FacadesPage = () => {
    const anchors = [
        {
            id: 'main',
            title: 'О фасадах',
            comp: <FirstScreen />,
        },
        {
            id: 'about',
            title: 'О вентфасадах',
            comp: <SecondScreen />,
        },
        {
            id: 'advantages',
            title: 'Преимущества',
            comp: <ThirdScreen />,
        },
        {
            id: 'designing',
            title: 'Разработка',
            comp: <FourthBlock />,
        },
        {
            id: 'about-system',
            title: 'О системе',
            comp: <FivethBlock />,
        },
        {
            id: 'marble',
            title: 'Фасад МРАМОР / ДОЛОМИТ / ТРАВЕРТИН',
            comp: <MarbleBlock />,
        },
        {
            id: 'clinkerstone',
            title: 'Фасад КЛИНКЕРСТОУН',
            comp: <ClinkerstoneBlock />,
        },
        {
            id: 'terracota',
            title: 'Фасад ТЕРРАКОТОВЫЕ ПАНЕЛИ',
            comp: <TerracotaBlock />,
        },
        {
            id: 'porcelain-tile',
            title: 'Фасад КЕРАМОГРАНИТ',
            comp: <PorcelainTileBlock />,
        },
        {
            id: 'artifical-stone',
            title: 'Фасад ИСКУССТВЕННЫЙ КАМЕНЬ',
            comp: <ArtificalStoneBlock />,
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

export default memo(FacadesPage)
