import React from 'react'
import cx from 'classnames'

import styles from './SubTitle.module.scss'

function SubTitle({ children, className }) {
    const titleCX = cx(styles['subTitle-kit'], className)

    return <div className={titleCX}>{children}</div>
}

export default React.memo(SubTitle)
