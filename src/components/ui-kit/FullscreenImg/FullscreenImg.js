import { useState } from 'react'
import cx from 'classnames'
import ReactDOM from 'react-dom'
import styles from './styles.module.scss'
import Image from './../Img'

export default function Img({ src, className, alt, ...rest }) {
    const [isFull, setIsFull] = useState(false)

    function handleImageClick(state) {
        return () => {
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
                        <Image
                            src={src}
                            alt={alt || 'Fullscreen image'}
                            sizes="100vw"
                            quality={95}
                            {...rest}
                        />
                    </div>,
                    document.body
                )}
            <Image
                src={src}
                className={cx(styles['full-image-thumb'], className)}
                onClick={handleImageClick(true)}
                alt={alt || 'Click to enlarge'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                {...rest}
            />
        </>
    )
}
