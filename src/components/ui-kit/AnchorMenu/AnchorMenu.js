import React, { useRef } from 'react'
import cx from 'classnames'

import styles from './AnchorMenu.module.scss'
import { useTranslation } from '../../layouts/Layout'
import { get } from '../../utils/facades/get'

function AnchorMenu({ anchors, activeAnchor }) {
    const activeAnchorRef = useRef(activeAnchor)
    const { t } = useTranslation('facades')

    const handleScrollToAnchor = (id, index) => () => {
        const element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setTimeout(() => {
            if (activeAnchorRef.current) {
                activeAnchorRef.current = null
                handleScrollToAnchor(id)()
            }
        }, index * 100)
    }

    return (
        <div className={styles['anchor-menu-wrapper']}>
            {anchors.map((anchor, index) => {
                const isActive = activeAnchor === anchor.id

                const buttonCX = cx({
                    [styles.button]: true,
                    [styles.button_active]: isActive,
                })

                return (
                    <div
                        className={buttonCX}
                        key={anchor.id}
                        onClick={handleScrollToAnchor(anchor.id, index)}
                    >
                        <div className={styles['dot']} />
                        <div className={styles['title']}>
                            {get(t, `${anchor.id}.title`) || anchor.title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default React.memo(AnchorMenu)
