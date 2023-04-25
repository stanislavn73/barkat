import React, { useRef } from 'react'
import cx from 'classnames'

import './AnchorMenu.module.less'

function AnchorMenu({ anchors, activeAnchor }) {
    const activeAnchorRef = useRef(activeAnchor)

    const handleScrollToAnchor = id => () => {
        const element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(() => {
            if (activeAnchorRef.current) {
                activeAnchorRef.current = null
                handleScrollToAnchor(id)()
            }
        }, 500)
    }

    return (
        <div className='anchor-menu-wrapper'>
            {anchors.map(anchor => {
                const isActive = activeAnchor === anchor.id

                const buttonCX = cx({
                    button: true,
                    button_active: isActive,
                })

                return (
                    <div
                        className={buttonCX}
                        key={anchor.id}
                        onClick={handleScrollToAnchor(anchor.id)}
                    >
                        <div className='dot' />
                        <div className='title'>{anchor.title}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(AnchorMenu)
