import { useState } from 'react'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'
import Image from './../Img'

export default function Img({ src, className, ...rest }) {
    const [isFull, setIsFull] = useState(false)

    function handleImageClick(state) {
        return () => {
            console.log('clicked', state)
            setIsFull(state)
        }
    }

    return (
        <>
            {isFull &&
                ReactDOM.createPortal(
                    <div
                        className={styles['fullscreen-image']}
                        onClick={handleImageClick(false)}
                    >
                        {console.log('rendered')}
                        <Image src={src} {...rest} loading='lazy' />
                    </div>,
                    document.body
                )}
            <Image
                src={src}
                className={cx(styles['full-image-thumb'], className)}
                onClick={handleImageClick(true)}
                {...rest}
                loading='lazy'
            />
        </>
    )
}
