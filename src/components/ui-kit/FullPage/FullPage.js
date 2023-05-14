import cx from 'classnames'

import styles from './FullPage.module.scss'

function FullPage({ children, min, className }) {
    const fullPageCX = cx(styles['full-page'], {
        [styles['full-page-freed']]: min,
        [className]: className,
    })

    return <div className={fullPageCX}>{children}</div>
}

export default FullPage
