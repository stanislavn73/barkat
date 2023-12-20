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
            Comp: FirstScreen,
        },
        {
            id: 'about',
            Comp: SecondScreen,
        },
        {
            id: 'advantages',
            Comp: ThirdScreen,
        },
        {
            id: 'designing',
            Comp: FourthBlock,
        },
        {
            id: 'about-system',
            Comp: FivethBlock,
        },
        {
            id: 'marble',
            Comp: MarbleBlock,
        },
        {
            id: 'clinkerstone',
            Comp: ClinkerstoneBlock,
        },
        {
            id: 'terracota',
            Comp: TerracotaBlock,
        },
        {
            id: 'porcelain-tile',
            Comp: PorcelainTileBlock,
        },
        {
            id: 'artifical-stone',
            Comp: ArtificalStoneBlock,
        },
    ]

    const [activeAnchor, setActiveAnchor] = useState(anchors[0].id)

    const handleAnchorReact = id => {
        setActiveAnchor(id)
    }

    return (
        <>
            <AnchorMenu anchors={anchors} activeAnchor={activeAnchor} />
            {anchors.map(({ id, Comp }) => (
                <Anchor key={id} id={id} onPositionChange={handleAnchorReact}>
                    <Comp id={id} />
                </Anchor>
            ))}
        </>
    )
}

export default memo(FacadesPage)
