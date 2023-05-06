import React from 'react'
import cx from 'classnames'

import styles from './Title.module.scss'

function Title({ children, className }) {
    const titleCX = cx(styles['title-kit'], className)

    return <div className={titleCX}>{children}</div>
}

export default React.memo(Title)
