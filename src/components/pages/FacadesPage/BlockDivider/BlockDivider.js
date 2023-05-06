import React from 'react'
import cx from 'classnames'
import styles from './BlockDivider.module.scss'

export default function Divider({ className }) {
    return <div className={cx(styles.divider, className)} />
}
