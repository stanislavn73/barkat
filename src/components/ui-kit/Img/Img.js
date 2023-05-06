import Image from 'next/image'
import cx from 'classnames'
import styles from './img.module.scss'
export default function Img({ src, className, ...rest }) {
    return (
        <Image
            // style={{ height: 'auto' }}
            src={src}
            className={cx(styles.adjust, className)}
            {...rest}
            loading='lazy'
        />
    )
}
