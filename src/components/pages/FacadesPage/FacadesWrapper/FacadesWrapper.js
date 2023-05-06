import styles from './FacadesPage.module.scss'
import cx from 'classnames'
export const FacadesWrapper = ({ className, children }) => {
    return (
        <div className={cx(className, styles['facade-type-wrapper'])}>
            {children}
        </div>
    )
}
