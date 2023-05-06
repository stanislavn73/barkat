import React from 'react'
import cx from 'classnames'
import styles from './PlainText.module.scss'

function Padded({ children, className }) {
    const plainTextCX = cx(styles['styled-text'], className)

    return <div className={plainTextCX}>{children}</div>
}

export default React.memo(Padded)
