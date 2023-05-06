import React from 'react'
import cx from 'classnames'

import styles from './Padded.module.scss'

function Padded({ children, className }) {
    const paddedCX = cx(styles.padded, className)

    return <div className={paddedCX}>{children}</div>
}

export default React.memo(Padded)
